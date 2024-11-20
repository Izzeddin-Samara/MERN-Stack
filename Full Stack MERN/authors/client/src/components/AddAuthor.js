import React from 'react';
import axios from 'axios';
import AuthorForm from './AuthorForm';
import { Link } from 'react-router-dom';

const AddAuthor = () => {
  const handleAddAuthor = async (authorData) => {
    try {
      await axios.post('http://localhost:5000/api/authors', authorData);
    } catch (error) {
      if (error.response && error.response.data.errors) {
        throw error.response.data.errors;
      }
      throw ['Failed to add the author.'];
    }
  };

  return (
    <div>
      <AuthorForm
        initialAuthor={{ name: '' }}
        onSubmit={handleAddAuthor}
      />
      <Link to="/authors">Go to all Authors</Link>
    </div>
  );
};

export default AddAuthor;
