//App.js

import React, { useState } from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import MainApp from './components/MainApp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

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
        <Router>
          <Switch>
            <Route path="/" exact>
              {isLoggedIn ? <MainApp /> : <LoginPage onLogin={handleLogin} />}
            </Route>
            <Route path="/login">
              <LoginPage onLogin={handleLogin} />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
