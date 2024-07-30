import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import butterfly from './butterfly.png';  

const Log = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    if (username === 'user' && password === 'pass') {
      setMessage('Login successful!');
      navigate('/dashboard'); // Navigate to the dashboard
    } else {
      setMessage('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login Details</h2>
      <div className="form-group">
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="button" onClick={handleClick}>Login</button> {/* Use onClick here */}
      <img src={butterfly} alt="Butterfly" style={{ width: '200px', marginTop: '20px' }} />
      {message && <p>{message}</p>}
    </div>
  );
};

export default Log;
