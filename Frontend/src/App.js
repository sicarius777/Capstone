import React, { useEffect, useState } from 'react';
import './App.css'; // Import any global styles here
import LoginPage from './components/LoginPage'; // Import the LoginPage component
import MainApp from './components/MainApp'; // Import the MainApp component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track authentication status
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data only when user is logged in
    if (isLoggedIn) {
      fetch('/data')
        .then(response => response.json())
        .then(data => setData(data.data))
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [isLoggedIn]); // Fetch data whenever isLoggedIn state changes

  // Function to handle login
  const handleLogin = () => {
    // Perform login logic here
    // For simplicity, set isLoggedIn to true
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1></h1>
      </header>
      <main>
        {isLoggedIn ? (
          <MainApp data={data} /> // Render MainApp component when user is logged in
        ) : (
          <LoginPage onLogin={handleLogin} /> // Render LoginPage component when user is not logged in
        )}
      </main>
    </div>
  );
}

export default App;
