import React, { useState } from 'react';
import './App.css';

function Add() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleAdd = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  
  };

const handleDiff = () => {

    const difference = parseFloat(num1) - parseFloat(num2);
    setResult(difference); 
  };

  const handleMulti = () => {

    const Product = parseFloat(num1) * parseFloat(num2);
    setResult(Product); 
  };

  const handleDiv = () => {

    const Division = parseFloat(num1) / parseFloat(num2);
    setResult(Division); 
  };
  
  
  return (
    <div className="App">
      <h1>Addition, Subtraction, Multiplication and Division of Two Numbers</h1>
      <div>
        <input
          type="number"
          value={num1}n
          onChange={(e) => setNum1(e.target.value)}
          placeholder="First number"
        />
      </div>
      <div>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Second number"
        />
      </div>
      <div>
      <button onClick={handleDiff}>Subtract</button><br/>
          
      <button onClick={handleAdd}>add</button><br/>

      <button onClick={handleMulti}>Product</button><br/>

      <button onClick={handleDiv}>Division</button>
      </div>
      {result !== null && <h2>Result: {result}</h2>}
    </div>
  );
   
}
export default Add;
