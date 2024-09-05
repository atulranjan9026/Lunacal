import React from 'react';
import './Tabs.css';

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs-container">
      <div className="tabs">
        <button className={`tab ${activeTab === 'about' && 'active'}`} onClick={() => setActiveTab('about')}>About Me</button>
        <button className={`tab ${activeTab === 'experiences' && 'active'}`} onClick={() => setActiveTab('experiences')}>Experiences</button>
        <button className={`tab ${activeTab === 'recommended' && 'active'}`} onClick={() => setActiveTab('recommended')}>Recommended</button>
      </div>
      <div className="tab-content">
        {activeTab === 'about' && (
          <div className="tab-pane">
            <p>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.</p>
            <p>I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM.</p>
          </div>
        )}
        {activeTab === 'experiences' && (
          <div className="tab-pane">Experiences content here.</div>
        )}
        {activeTab === 'recommended' && (
          <div className="tab-pane">Recommended content here.</div>
        )}
      </div>
    </div>
  );
}

export default Tabs;
