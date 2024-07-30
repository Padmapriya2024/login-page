import React, { useState } from 'react';
import './App.css';

function Toggle() {

    const [switchon, setSwitchon]= useState(false);

    return  (
        <div>
            <h1> Toggle Switch </h1>
            <h2> {switchon? 'ON' : 'OFF' } </h2>
            <button onClick={()=> setSwitchon(!switchon)}> { switchon ?  'TURN OFF' : 'TURN ON'}
                </button>
        </div>
    );
}

export default Toggle;