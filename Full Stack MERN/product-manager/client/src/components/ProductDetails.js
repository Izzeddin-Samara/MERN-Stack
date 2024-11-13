import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'; 
import axios from 'axios';

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

    const handleDelete = () => {
        console.log('Deleting product with ID:', id);
        axios.delete(`http://localhost:5000/api/products/delete/${id}`)
            .then(response => {
                console.log('Delete response:', response);
                alert('Product deleted successfully!');
                navigate('/products');
            })
            .catch(error => {
                console.error('Error deleting product:', error);
            });
    };
    

    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={handleDelete}>Delete Product</button>
            <Link to={`/products/update/${product._id}`}>Edit Product</Link>  
        </div>
    );
};

export default ProductDetails;
