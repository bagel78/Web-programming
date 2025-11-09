import React, { useState } from 'react';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';

export default function AuthSwitcher() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="app-container">
      
      <button style={{margin: '3rem auto'}} onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? 'Switch to Register' : 'Switch to Login'}
      </button>

      {showLogin ? <LoginComponent /> : <RegisterComponent />}
    </div>
  );
}
