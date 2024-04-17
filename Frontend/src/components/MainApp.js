import React from 'react';

function MainApp({ data }) {
  return (
    <div>
      <h2>Welcome to the Main App</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MainApp;
