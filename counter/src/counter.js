import React, {useState} from'react';
import './App.css';

function Counter() 
{
  const [ count, setCount]= useState(0);


return (
   <div className="counter-container">
    <h1>   Counter   </h1>
    <button onClick={()=> setCount(count + 1)}>   Increment</button>
    <button onClick={()=> setCount(count - 1)}>  Decrement </button>
    <h1>{count}</h1>

    <button onClick={() => setCount(0)}>Reset</button>
    </div>

  );
}

export default Counter;
