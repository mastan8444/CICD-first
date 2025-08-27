// src/App.jsx
import React, { useState } from "react";
import "./App.css";

function App() {
  // Counter
  const [count, setCount] = useState(0);

  // Color Generator
  const [color, setColor] = useState("#3498db");

  // Simple Calculator
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  // Functions
  const randomColor = () => {
    const letters = "0123456789ABCDEF";
    let c = "#";
    for (let i = 0; i < 6; i++) c += letters[Math.floor(Math.random() * 16)];
    setColor(c);
  };

  const calculate = (op) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) return setResult("Enter valid numbers!");
    switch (op) {
      case "add": setResult(a + b); break;
      case "sub": setResult(a - b); break;
      case "mul": setResult(a * b); break;
      case "div": setResult(b !== 0 ? a / b : "Cannot divide by zero"); break;
      default: setResult(null);
    }
  };

  return (
    <div className="app">
      <h1>🎉 Interactive React Playground</h1>

      {/* Counter Section */}
      <div className="section">
        <h2>🧮 Counter</h2>
        <div className="counter">
          <button onClick={() => setCount(count - 1)}>-</button>
          <span>{count}</span>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </div>

      {/* Color Generator Section */}
      <div className="section">
        <h2>🎨 Random Color Generator</h2>
        <div
          className="color-box"
          style={{ backgroundColor: color }}
        >
          {color}
        </div>
        <button onClick={randomColor}>Generate Color</button>
      </div>

      {/* Calculator Section */}
      <div className="section">
        <h2>➗ Simple Calculator</h2>
        <input
          type="number"
          placeholder="Number 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Number 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <div className="calc-buttons">
          <button onClick={() => calculate("add")}>+</button>
          <button onClick={() => calculate("sub")}>-</button>
          <button onClick={() => calculate("mul")}>×</button>
          <button onClick={() => calculate("div")}>÷</button>
        </div>
        {result !== null && <p className="result">Result: {result}</p>}
      </div>
    </div>
  );
}

export default App;
