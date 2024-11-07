import React from 'react';
import Navbar from './Navbar';
import FormWrapper from './FormWrapper';
import UserProvider from '../UserContext';

const Wrapper = () => {
  return (
    <UserProvider>
      <Navbar />
      <FormWrapper />
    </UserProvider>
  );
};

export default Wrapper;
