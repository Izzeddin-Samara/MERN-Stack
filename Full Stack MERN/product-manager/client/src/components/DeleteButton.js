import React from 'react';
import axios from 'axios';

const DeleteButton = ({ id, deleteEndpoint, onSuccess, onError, buttonText = 'Delete', redirectTo = null }) => {
    const handleDelete = () => {
        const endpoint = `${deleteEndpoint}/${id}`;
        axios.delete(endpoint)
            .then(response => {
                console.log('Delete response:', response);
                alert('Item deleted successfully!');
                if (onSuccess) onSuccess(response);
                if (redirectTo) {
                    window.location.href = redirectTo;
                }
            })
            .catch(error => {
                console.error('Error deleting item:', error);
                if (onError) onError(error);
            });
    };

    return <button onClick={handleDelete}>{buttonText}</button>;
};

export default DeleteButton;
