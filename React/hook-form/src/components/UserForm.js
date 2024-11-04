import React, { useState } from 'react';


const UserForm = () => {
  // Set up state for each input field
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Function to handle form submission
  const createUser = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    const newUser = { firstName, lastName, email, password, confirmPassword };
    console.log("User Created:", newUser);

    // Clear the form fields after submission
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

  };

  return (
    <div>
      <form onSubmit={createUser}>
        <div>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder='First Name'
          />
        </div>
        <div>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder='Last Name'
          />
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
          />
        </div>
        <div>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder='Confirm Password'
          />
        </div>
        <input type="submit" value="Create User" />
      </form>

      <h3>Your Form Data</h3>
      <p><strong>First Name:</strong> {firstName}</p>
      <p><strong>Last Name:</strong> {lastName}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Password:</strong> {password}</p>
      <p><strong>Confirm Password:</strong> {confirmPassword}</p>
    </div>
  );
};

export default UserForm;
