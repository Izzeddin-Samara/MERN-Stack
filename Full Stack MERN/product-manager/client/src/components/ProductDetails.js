import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'; 
import axios from 'axios';
import DeleteButton from './DeleteButton';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${id}`)
            .then(response => {
                console.log('Fetched Product:', response.data);
                setProduct(response.data);
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
            });
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            
            
            <DeleteButton
                id={id}
                deleteEndpoint="http://localhost:5000/api/products/delete"
                onSuccess={() => {
                    navigate('/products');
                }}
                onError={(error) => {
                    alert('Failed to delete the product!');
                    console.error('Error:', error);
                }}
                buttonText="Delete Product"
            />
            
            <Link to={`/products/update/${product._id}`}>Edit Product</Link>
        </div>
    );
};

export default ProductDetails;
