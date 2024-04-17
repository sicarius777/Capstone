import React from 'react';
import './LoginPage.css'; // Import the LoginPage styles

function LoginPage() {
  return (
    <div className="login-page">
      <h1 className="login-header">Master Codex</h1>
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username or Email:</label>
            <input type="text" id="username" name="username" placeholder="Enter your username or email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
