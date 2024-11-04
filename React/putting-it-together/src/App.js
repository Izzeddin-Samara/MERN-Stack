import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function PersonCard({ firstName, lastName, initialAge, hairColor }) {
  const [age, setAge] = useState(initialAge);

  const increaseAge = () => {
    setAge(age + 1);
  };

  return (
    <div>
      <h2>{lastName}, {firstName}</h2>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Doe" lastName="Jane" initialAge={15} hairColor="Black" />
      <PersonCard firstName="Smith" lastName="John" initialAge={88} hairColor="Brown" />
      <PersonCard firstName="Fillmore" lastName="Millard" initialAge={50} hairColor="Brown" />
      <PersonCard firstName="Smith" lastName="Maria" initialAge={62} hairColor="Brown" />
    </div>
  );
}

export default App;


