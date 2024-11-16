import React from 'react';
import axios from 'axios';
import ProductForm from './ProductForm';
import { Link } from 'react-router-dom';

const AddProduct = () => {
    const handleAddProduct = (productData) => {
        return axios.post('http://localhost:5000/api/products', productData);
    };

    return (
        <div>
            <ProductForm
                initialProduct={{ title: '', price: '', description: '' }}
                onSubmit={handleAddProduct} />
            <Link to="/products">Go to all Products</Link>
        </div>
    );
};

export default AddProduct;
