import React, { useState } from 'react';
import './App.css';

// Parent Component
function ColorBoxApp() {
  const [boxes, setBoxes] = useState([]); // State to hold box data

  // Function to handle new box addition
  const addBox = (color, size) => {
    setBoxes([...boxes, { color, size }]);
  };

  return (
    <div>
      <ColorForm onAddBox={addBox} />
      <div className="color-box-container">
        {boxes.map((box, index) => (
          <ColorBox key={index} color={box.color} size={box.size} />
        ))}
      </div>
    </div>
  );
}

// Form Component
function ColorForm({ onAddBox }) {
  const [color, setColor] = useState('');
  const [size, setSize] = useState(100); // Default size

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color) {
      onAddBox(color, size);
      setColor(''); // Clear input
      setSize(100); // Reset size to default
    }
  };

  return (
    <form onSubmit={handleSubmit} className="color-box-form">
      <label>
        Color:
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="Enter color"
          className="color-box-input"
        />
      </label>
      <label>
        Size:
        <input
          type="number"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          placeholder="Enter size"
          className="color-box-input"
        />
      </label>
      <button type="submit" className="color-box-button">Add</button>
    </form>
  );
}

// Box Component
function ColorBox({ color, size }) {
  return (
    <div
      className="color-box"
      style={{
        '--box-color': color,
        '--box-size': `${size}px`,
      }}
    />
  );
}

export default ColorBoxApp;
