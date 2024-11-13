import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleAddProduct = (e) => {
        e.preventDefault();

        const productData = {
            title,
            price,
            description
        };

        axios.post('http://localhost:5000/api/products', productData)
            .then((response) => {
                setTitle('');
                setPrice('');
                setDescription('');
                setSuccessMessage('Product added successfully!');
            })
            .catch((error) => {
                setErrorMessage('Failed to add the product. Please try again.');
            });
    };

    return (
        <div>
            <h1>Add New Product</h1>
            {successMessage && <div>{successMessage}</div>}
            {errorMessage && <div>{errorMessage}</div>}
            <form onSubmit={handleAddProduct}>
                <div>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        placeholder='Title'
                    />
                </div>
                <div>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                        placeholder='Price'
                    />
                </div>
                <div>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        placeholder='Description'
                    />
                </div>
                <button type="submit">Add Product</button>
            </form>
            <Link to="/products">Go to all Products</Link>
            
        </div>
    );
};

export default AddProduct;
