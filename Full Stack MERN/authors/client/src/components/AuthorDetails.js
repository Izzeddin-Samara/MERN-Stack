import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'; 
import axios from 'axios';
import DeleteButton from './DeleteButton';

const AuthorDetails = () => {
    const { id } = useParams();
    const [author, setAuthor] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/authors/${id}`)
            .then(response => {
                console.log('Fetched Author:', response.data);
                setAuthor(response.data);
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
            });
    }, [id]);

    if (!author) return <div>Loading...</div>;

    return (
        <div>
            <h1>{author.name}</h1>

            
            
            <DeleteButton
                id={id}
                deleteEndpoint="http://localhost:5000/api/authors/delete"
                onSuccess={() => {
                    navigate('/authors');
                }}
                onError={(error) => {
                    alert('Failed to delete the product!');
                    console.error('Error:', error);
                }}
                buttonText="Delete Author"
            />
            
            <Link to={`/authors/update/${author._id}`}>Edit Product</Link>
        </div>
    );
};

export default AuthorDetails;