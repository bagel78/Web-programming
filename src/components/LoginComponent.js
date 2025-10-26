import React from 'react';

export default function LoginComponent() {
      const [username, setUsername] = React.useState('');
      const [password, setPassword] = React.useState('');

      const handleLogin = (e) => {
        e.preventDefault();
        alert(`Login with username: ${username} and password: ${password}`);
      };

      return (
        <div className="form-container">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <label htmlFor="login-username">Username</label>
            <input
              type="text"
              id="login-username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <label htmlFor="login-password">Password</label>
            <input
              type="password"
              id="login-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Log In</button>
          </form>
        </div>
      );
    }