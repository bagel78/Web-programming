import React from 'react';

export default function RegisterComponent() {
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Register with email: ${email}, username: ${username}, password: ${password}`);
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label htmlFor="register-email">Email</label>
        <input
          type="email"
          id="register-email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <label htmlFor="register-username">Username</label>
        <input
          type="text"
          id="register-username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <label htmlFor="register-password">Password</label>
        <input
          type={showPassword ? 'text' : 'password'}
          id="register-password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <div
          className="toggle-password"
          onClick={togglePasswordVisibility}
          role="button"
          tabIndex={0}
        >
          {showPassword ? 'Hide Password' : 'Show Password'}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}