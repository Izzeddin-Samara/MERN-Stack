import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    
    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
                setErrorMessage('Failed to load products');
            });
    }, []);

    return (
        <div>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <h1>All Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        <Link to={`/products/${product._id}`}>
                            {product.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AllProducts;
