import React, { useState } from 'react';
import './WorldOptionsList.css';

const WorldOptionsList = ({ onMouseEnter, onMouseLeave }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onMouseEnter();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onMouseLeave();
  };

  return (
    <div 
      className="world-options-list" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      style={{ display: isHovered ? 'flex' : 'none' }}
    >
      <button className="option">Topography</button>
      <button className="option">Flora</button>
      <button className="option">Fauna</button>
      <button className="option">People</button>
      <button className="option">Astrology</button>
    </div>
  );
};

export default WorldOptionsList;
