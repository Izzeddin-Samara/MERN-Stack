import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: ''
    });
    const [originalProduct, setOriginalProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${id}`)
            .then(response => {
                setProduct(response.data);
                setOriginalProduct(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError('Error fetching product details for update');
                setLoading(false);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (JSON.stringify(product) === JSON.stringify(originalProduct)) {
            alert('No changes made to the product!');
            return;
        }

        axios.put(`http://localhost:5000/api/products/update/${id}`, product)
            .then(response => {
                alert('Product updated successfully!');
                navigate(`/products/${id}`);
            })
            .catch(error => {
                alert('Error updating product. Please try again later.');
                console.error('Error updating product:', error);
            });
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={product.title}
                        onChange={handleChange}
                        placeholder="Title"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        placeholder="Price"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        placeholder="Description"
                        required
                    />
                </div>
                <button type="submit">Update Product</button>
            </form>
        </div>
    );
};

export default UpdateProduct;
