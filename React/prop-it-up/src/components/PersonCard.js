import React from 'react';

function PersonCard({ firstName, lastName, age, hairColor }) {
  return (
    <div>
      <h1>{firstName} {lastName}</h1>
      <div>
        <p>Age: {age}</p>
      </div>
      <div>
        <p>Hair Color: {hairColor}</p>
      </div>
    </div>
  );
}

export default PersonCard;
