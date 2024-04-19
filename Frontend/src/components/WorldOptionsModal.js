// WorldOptionsModal.js

import React, { useState } from 'react';
import './WorldOptionsModal.css';

function WorldOptionsModal({ onClose, onSelectWorld }) {
  const [worldName, setWorldName] = useState(''); // State for the world name input

  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink']; // Sample color options

  // Function to handle creating a new world item
  const handleCreateWorld = (color) => {
    if (worldName.trim() !== '') { // Check if the world name is not empty
      onSelectWorld({ name: worldName, color }); // Create a new world item with name and color
      setWorldName(''); // Reset the world name input
      onClose(); // Close the modal
    } else {
      alert('Please enter a name for the world.'); // Show an alert if the world name is empty
    }
  };

  return (
    <div className="world-options-modal">
      <h2>Enter World Name:</h2>
      <input
        type="text"
        value={worldName}
        onChange={(e) => setWorldName(e.target.value)}
        placeholder="Enter world name..."
      />
      <div className="color-options">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-option"
            style={{ backgroundColor: color }}
            onClick={() => handleCreateWorld(color)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default WorldOptionsModal;
