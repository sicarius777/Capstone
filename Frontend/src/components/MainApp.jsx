// MainApp.js
import React, { useState } from 'react';
import './MainApp.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function MainApp() {
  // State to store the list of worlds
  const [worlds, setWorlds] = useState([]);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the values of world name and image input fields
    const worldName = event.target.elements['world-name'].value;
    const worldImage = event.target.elements['world-image'].files[0]; // Get the file object

    // Create a new world object with name and image
    const newWorld = {
      name: worldName,
      image: worldImage,
    };

    // Update the list of worlds by adding the new world
    setWorlds([...worlds, newWorld]);

    // Clear the form fields
    event.target.reset();
  };

  // Function to handle accessing a world
  const handleAccessWorld = (world) => {
    // Implement the behavior to access the selected world here
    console.log(`Accessing world: ${world.name}`);
  };

  return (
    <div className="main-app">
      <div className="top-bar"></div>
      <div className="content-wrapper">
        <div className="side-bar">
          <h2>Create World</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="world-name">World Name:</label>
            <input type="text" id="world-name" name="world-name" placeholder="Enter world name" />

            <label htmlFor="world-image">World Image:</label>
            <input type="file" id="world-image" name="world-image" accept="image/*" />

            <button type="submit">Create</button>
          </form>

          <hr />

          <h3>Worlds</h3>
          <ul className="world-list">
            {/* Map through the list of worlds and render each one */}
            {worlds.map((world, index) => (
              <li key={index}>
                <p>{world.name}</p>
                {/* Display the image */}
                {world.image && <img src={URL.createObjectURL(world.image)} alt={world.name} />}
                {/* Button to access the world */}
                <button onClick={() => handleAccessWorld(world)}>Access</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="content"></div>
      </div>
    </div>
  );
}

export default MainApp;
