import React, { useState, useEffect } from 'react';

const AuthorForm = ({
  initialAuthor = { name: '' },
  onSubmit,
  isEdit = false,
}) => {
  const [author, setAuthor] = useState(initialAuthor);
  const [validationErrors, setValidationErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    setAuthor(initialAuthor);
  }, [initialAuthor]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthor((prevAuthor) => ({
      ...prevAuthor,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidationErrors([]);
    try {
      await onSubmit(author);
      setSuccessMessage(isEdit ? 'Author updated successfully!' : 'Author added successfully!');
      setValidationErrors([]);
      if (!isEdit) {
        setAuthor({ name: '' });
      }
    } catch (errors) {
      setValidationErrors(errors);
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <h1>{isEdit ? 'Update Author' : 'Add New Author'}</h1>
      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
      {validationErrors.length > 0 && (
        <ul style={{ color: 'red' }}>
          {validationErrors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={author.name}
            onChange={handleChange}
            placeholder="Author's name"
          />
        </div>
        <button type="submit">{isEdit ? 'Update Author' : 'Add Author'}</button>
      </form>
    </div>
  );
};

export default AuthorForm;
