import React, { useState } from 'react';
import './MainApp.css'; // Import CSS file for styling
import backgroundImage from '/images/backgrounds/worldbuilding.jpg'; // Adjust the path as needed

function MainApp() {
  // State to track authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle login (assuming you have a login mechanism)
  const handleLogin = () => {
    // Logic to authenticate the user
    // Once authenticated, update the state
    setIsAuthenticated(true);
  };

  return (
    <div className={`main-container ${isAuthenticated ? 'authenticated' : ''}`}>
      {/* Content */}
      {isAuthenticated && (
        <div className="sidebar">
          {/* Sidebar Content (Worlds List) */}
          <ul className="worlds-list">
            {/* Render each world as a list item */}
            {/* Add your list items here */}
          </ul>
        </div>
      )}

      {/* Main Content Area */}
      <div className="main-content">
        {/* Header */}
        <header className="header">
          <h1>Welcome to Codex of Worlds</h1>
        </header>

        {/* World Image Gallery */}
        <div className="worlds-gallery">
          {/* Map through user's worlds and render each as an image */}
          {/* <img key={world.id} src={world.image} alt={world.name} /> */}
        </div>
      </div>
    </div>
  );
}

export default MainApp;
