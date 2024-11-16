import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProductForm from './ProductForm';

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialProduct, setInitialProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((response) => {
        setInitialProduct(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Error fetching product details for update');
        setLoading(false);
      });
  }, [id]);

  const handleUpdateProduct = (productData) => {
    return axios.put(`http://localhost:5000/api/products/update/${id}`, productData).then(() => {
      navigate(`/products/${id}`);
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <ProductForm
        initialProduct={initialProduct}
        onSubmit={handleUpdateProduct}
        isEdit={true}
      />
    </div>
  );
};

export default UpdateProduct;
