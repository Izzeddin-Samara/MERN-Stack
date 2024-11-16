import React, { useState, useEffect } from 'react';

const ProductForm = ({
  initialProduct = { title: '', price: '', description: '' },
  onSubmit,
  isEdit = false,
}) => {

  const [product, setProduct] = useState(initialProduct);

  
  useEffect(() => {
    setProduct(initialProduct);
  }, [initialProduct]);

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product)
      .then(() => {
        setSuccessMessage(isEdit ? 'Product updated successfully!' : 'Product added successfully!');
        setErrorMessage('');
        if (!isEdit) {
        
          setProduct({ title: '', price: '', description: '' });
        }
      })
      .catch(() => {
        setErrorMessage(isEdit ? 'Failed to update the product.' : 'Failed to add the product.');
        setSuccessMessage('');
      });
  };

  return (
    <div>
      <h1>{isEdit ? 'Update Product' : 'Add New Product'}</h1>
      {successMessage && <div>{successMessage}</div>}
      {errorMessage && <div>{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
            required
            placeholder="Title"
          />
        </div>
        <div>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
            placeholder="Price"
          />
        </div>
        <div>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            required
            placeholder="Description"
          />
        </div>
        <button type="submit">{isEdit ? 'Update Product' : 'Add Product'}</button>
      </form>
    </div>
  );
};

export default ProductForm;
