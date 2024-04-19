import React, { useState } from 'react';
import './LoginPage.css'; // Import the LoginPage styles
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic for handling form submission (e.g., sending login request to backend)
    console.log('Username/Email:', username);
    console.log('Password:', password);
  };

  // Google sign-in handler
  const handleGoogleSignIn = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle successful sign-in
        console.log('Google sign-in success:', result.user);
      })
      .catch((error) => {
        // Handle sign-in error
        console.error('Google sign-in error:', error);
      });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username or Email:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Enter your username or email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        {/* Google sign-in button */}
        <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      </div>
    </div>
  );
}

export default LoginPage;
