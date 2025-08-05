// src/App.jsx
import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [name, setName] = useState('');

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <h1>🚀 Welcome to React Enhanced!</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        {name && <p>Hello, <strong>{name}</strong> 👋</p>}
      </div>

      <div className="counter-section">
        <button onClick={() => setCount(count + 1)}>Click Count: {count}</button>
      </div>

      <div className="theme-section">
        <button onClick={toggleTheme}>
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </div>
  );
}

export default App;
