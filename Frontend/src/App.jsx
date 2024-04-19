//App.js

import React, { useState } from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import MainApp from './components/MainApp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic here (e.g., validate credentials)
    // For simplicity, just set isLoggedIn to true
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1></h1>
      </header>
      <main>
        {isLoggedIn ? (
          <MainApp />
        ) : (
          <LoginPage onLogin={handleLogin} />
        )}
      </main>
    </div>
  );
}

export default App;
