import React from 'react';
import './App.css';
import Tabs from './components/Tabs';

function App() {
  const tabData = [
    { label: 'Tab 1', content: 'Tab 1 content is showing here.' },
    { label: 'Tab 2', content: 'Tab 2 content is showing here.' },
    { label: 'Tab 3', content: 'Tab 3 content is showing here.' },
  ];

  return (
    <div>
      <h1>My Tabs Component</h1>
      <Tabs tabs={tabData} />
    </div>
  );
}

export default App;
