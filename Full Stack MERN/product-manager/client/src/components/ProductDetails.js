import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    
    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${id}`)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                console.error('Error fetching product details:', error);
                setErrorMessage('Failed to load product details');
            });
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <h1>{product.title}</h1>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
        </div>
    );
};

export default ProductDetails;
