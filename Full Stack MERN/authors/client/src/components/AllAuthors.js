import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const AllAuthors = () => {
    const [authors, setAuthors] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    
    useEffect(() => {
        axios
            .get('http://localhost:5000/api/authors')
            .then((response) => {
                console.log('Fetched authors:', response.data);
                setAuthors(response.data);
            })
            .catch((error) => {
                console.error('Error fetching authors:', error);
                setErrorMessage('Failed to load authors');
            });
    }, []);

    return (
        <div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <h1>Favorite Authors</h1>
        {authors.length === 0 ? (
          <p>No authors found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Available Actions</th>
              </tr>
            </thead>
            <tbody>
              {authors.map((author) => (
                <tr key={author._id}>
                  <td>
                    <Link to={`/authors/${author._id}`}>{author.name}</Link>
                  </td>
                  <td>
                    {/* Delete Button */}
                    <DeleteButton
                      id={author._id}
                      deleteEndpoint="http://localhost:5000/api/authors/delete"
                      onSuccess={() =>
                        setAuthors(authors.filter((a) => a._id !== author._id))
                      }
                      onError={(error) => {
                        alert('Failed to delete the author!');
                        console.error('Error:', error);
                      }}
                      buttonText="Delete"
                    />
                    {/* Edit Button */}
                    <Link to={`/authors/update/${author._id}`}>Edit</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      
    );
};

export default AllAuthors;
