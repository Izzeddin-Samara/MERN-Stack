import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthorForm from './AuthorForm';

const UpdateAuthor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialAuthor, setInitialAuthor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/authors/${id}`)
      .then((response) => {
        setInitialAuthor(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Error fetching author details for update.');
        setLoading(false);
      });
  }, [id]);

  const handleUpdateAuthor = async (authorData) => {
    try {
      await axios.put(`http://localhost:5000/api/authors/update/${id}`, authorData);
      navigate(`/authors/${id}`);
    } catch (error) {
      if (error.response && error.response.data.errors) {
        throw error.response.data.errors;
      }
      throw ['Failed to update the author.'];
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <AuthorForm
        initialAuthor={initialAuthor}
        onSubmit={handleUpdateAuthor}
        isEdit={true}
      />
    </div>
  );
};

export default UpdateAuthor;
