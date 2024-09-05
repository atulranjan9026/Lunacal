import React, { useState } from 'react';
import './WidgetLayout.css'; // Import your custom CSS for padding, margin, shadows

const WidgetLayout = () => {
  const [activeTab, setActiveTab] = useState('about');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div className="tab-content">
            <p>Hello! I’m Dave, your sales rep from Salesforce. I’ve been working at this awesome company for 3 years now...</p>
          </div>
        );
      case 'experiences':
        return <div className="tab-content">Experience details here...</div>;
      case 'recommended':
        return <div className="tab-content">Recommended details here...</div>;
      default:
        return null;
    }
  };

  return (
    <div className="widgets-container">
      {/* First Widget (About Me, Experiences, Recommended Tabs) */}
      <div className="widget about-widget">
        <div className="tabs">
          <button className={activeTab === 'about' ? 'active' : ''} onClick={() => setActiveTab('about')}>About Me</button>
          <button className={activeTab === 'experiences' ? 'active' : ''} onClick={() => setActiveTab('experiences')}>Experiences</button>
          <button className={activeTab === 'recommended' ? 'active' : ''} onClick={() => setActiveTab('recommended')}>Recommended</button>
        </div>
        {renderTabContent()}
      </div>

      {/* Second Widget (Gallery) */}
      <div className="widget gallery-widget">
        <h3>Gallery</h3>
        <div className="gallery">
          <div className="gallery-item"><img src="image1.jpg" alt="Gallery Image 1" /></div>
          <div className="gallery-item"><img src="image2.jpg" alt="Gallery Image 2" /></div>
          <div className="gallery-item"><img src="image3.jpg" alt="Gallery Image 3" /></div>
        </div>
        <button className="add-image">+ Add Image</button>
        <div className="gallery-nav">
          <button>←</button>
          <button>→</button>
        </div>
      </div>
    </div>
  );
};

export default WidgetLayout;
