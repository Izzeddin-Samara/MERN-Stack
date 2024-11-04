import React, { useState } from 'react';


const UserForm = () => {
  // State for input fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // State for validation errors
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // Validation functions
  const validateFirstName = (value) => {
    setFirstName(value);
    if (value.length < 2) {
      setFirstNameError("First name must be at least 2 characters.");
    } else {
      setFirstNameError("");
    }
  };

  const validateLastName = (value) => {
    setLastName(value);
    if (value.length < 2) {
      setLastNameError("Last name must be at least 2 characters.");
    } else {
      setLastNameError("");
    }
  };

  const validateEmail = (value) => {
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (value) => {
    setPassword(value);
    if (value.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
    } else {
      setPasswordError("");
    }
  };

  const validateConfirmPassword = (value) => {
    setConfirmPassword(value);
    if (value !== password) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  };

  // Function to handle form submission
  const createUser = (e) => {
    e.preventDefault();
    if (!firstNameError && !lastNameError && !emailError && !passwordError && !confirmPasswordError) {
      const newUser = { firstName, lastName, email, password, confirmPassword };
      console.log("User Created:", newUser);

      // Clear the form fields after submission
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div className="form-container">
      <form className='form' onSubmit={createUser}>
        <div>
          <input
            type="text"
            value={firstName}
            onChange={(e) => validateFirstName(e.target.value)}
            placeholder='First Name'
          />
          {firstNameError && <p className="error-message">{firstNameError}</p>}
        </div>
        <div>
          <input
            type="text"
            value={lastName}
            onChange={(e) => validateLastName(e.target.value)}
            placeholder='Last Name'
          />
          {lastNameError && <p className="error-message">{lastNameError}</p>}
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => validateEmail(e.target.value)}
            placeholder='Email'
          />
          {emailError && <p className="error-message">{emailError}</p>}
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => validatePassword(e.target.value)}
            placeholder='Password'
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>
        <div>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => validateConfirmPassword(e.target.value)}
            placeholder='Confirm Password'
          />
          {confirmPasswordError && <p className="error-message">{confirmPasswordError}</p>}
        </div>
        <input type="submit" value="Create User" />
      </form>
    </div>
  );
};

export default UserForm;
