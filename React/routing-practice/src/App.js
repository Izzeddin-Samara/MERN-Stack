import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from 'react-router-dom';
import './App.css'; 

function Home() {
  return <h2 className="centered-text">Welcome</h2>;
}

function Index() {
  return <h2 className="centered-text">Welcome to the first page</h2>;
}

function DisplayValue() {
  const { value } = useParams();
  const isNumber = !isNaN(+value); 

  return (
    <h2 className="centered-text">
      {isNumber ? `The number is: ${value}` : `The word is: ${value}`}
    </h2>
  );
}

function StyledWord() {
  const { word, textColor = 'black', bgColor = 'lightgray' } = useParams();

  const styleClass = {
    color: textColor,
    backgroundColor: bgColor,
  };

  return (
    <h2
      className="centered-text"
      style={styleClass}
    >
      The word is: {word}
    </h2>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/:value" element={<DisplayValue />} />
          <Route path="/:word/:textColor/:bgColor" element={<StyledWord />} />
          <Route path="*" element={<h2 className="centered-text">404 Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
