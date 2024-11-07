import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const Navbar = () => {
  const { name } = useContext(UserContext);

  return (
    <div className="navbar">
      <h1>Hi {name}!</h1>
    </div>
  );
};

export default Navbar;
