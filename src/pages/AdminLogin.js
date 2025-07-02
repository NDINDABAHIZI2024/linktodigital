// src/pages/AdminLogin.js

import React, { useState } from 'react';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple mock authentication check
    if (username === 'admin' && password === 'admin123') {
      setMessage('✅ Login successful!');
      // You can add redirect here if you want, e.g.:
      // navigate('/dashboard');
    } else {
      setMessage('❌ Invalid credentials.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center' }}>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '12px' }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '100%', padding: '10px', fontSize: '16px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '12px' }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '10px', fontSize: '16px' }}
            required
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '12px', fontSize: '16px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
          Login
        </button>
      </form>
      {message && <p style={{ marginTop: '20px', textAlign: 'center' }}>{message}</p>}
    </div>
  );
}

export default AdminLogin;
