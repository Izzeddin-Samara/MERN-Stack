import React, { useState } from 'react';


function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    if (tabs[index].onClick) {
      tabs[index].onClick();
    }
  };

  return (
    <div>
      {/* Render tab headers */}
      <div className="tabs-container">
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => handleTabClick(index)}
            className={`tab-header ${activeTab === index ? 'active' : 'inactive'}`}
          >
            {tab.label}
          </div>
        ))}
      </div>

      {/* Render active tab content */}
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

export default Tabs;
