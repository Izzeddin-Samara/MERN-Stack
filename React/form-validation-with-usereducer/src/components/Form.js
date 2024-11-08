import React, { useReducer } from 'react';


// Initial state
const initialState = {
  firstName: { value: '', error: null },
  lastName: { value: '', error: null },
  email: { value: '', error: null }
};

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'SET_VALUE':
      return {
        ...state,
        [action.field]: { ...state[action.field], value: action.payload }
      };
    case 'SET_ERROR':
      return {
        ...state,
        [action.field]: { ...state[action.field], error: action.payload }
      };
    default:
      return state;
  }
}

// Validation functions
const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email) ? null : 'Invalid email format';
};

const validateName = (name, field) => {
  if (!name.trim()) {
    return field === 'firstName' ? 'First name is required' : 'Last name is required';
  }
  return null;
};

// Form Component
function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Set the field value
    dispatch({ type: 'SET_VALUE', field: name, payload: value });

    // Validate the input and set errors
    let error = null;
    if (name === 'email') {
      error = validateEmail(value);
    } else {
      error = validateName(value, name);  
    }
    dispatch({ type: 'SET_ERROR', field: name, payload: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for errors before submitting
    const hasErrors = Object.values(state).some(field => field.error);
    if (hasErrors) {
      console.log("Form has errors. Please fix them before submitting.");
      return;
    }

    // Otherwise, proceed with form submission
    console.log("Form Submitted:", state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input
          name="firstName"
          value={state.firstName.value}
          onChange={handleChange}
        />
        {state.firstName.error && <p className="error">{state.firstName.error}</p>}
      </div>
      <div>
        <label>Last Name</label>
        <input
          name="lastName"
          value={state.lastName.value}
          onChange={handleChange}
        />
        {state.lastName.error && <p className="error">{state.lastName.error}</p>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={state.email.value}
          onChange={handleChange}
        />
        {state.email.error && <p className="error">{state.email.error}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
