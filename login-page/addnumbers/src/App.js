import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleAdd = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };

  return (
    <div className="App">
      <h1>Adding Two Numbers</h1>
      <div>
        <input
          type="number"
          value={num1}n
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter the First number"
        />
      </div>
      <div>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter the Second number"
        />
      </div>
      <button onClick={handleAdd}>Add</button>
      {result !== null && <h2>Result: {result}</h2>}
    </div>
  );
}

export default App;
