import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const Form = () => {
  const { setName } = useContext(UserContext);

  return (
    <div className="form">
      <label>Your Name:</label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Bob Smith"
      />
    </div>
  );
};

export default Form;
