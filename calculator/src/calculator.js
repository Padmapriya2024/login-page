import React, {useState} from 'react';

function Calc() {
    const[ n1, setN1]= useState('');
    const[ n2, setN2]= useState('');
    const[ result, setResult]= useState(null);

    const Calculate = (operator)=> {
        const num1= parseFloat(n1);
        const num2= parseFloat(n2);

        if(isNaN(num1) || isNaN(num2))  {
            setResult('Enter the number');
            return;
        }
         let evaluation;

         switch(operator) {
            case '+':
                evaluation= num1 + num2;
                break;
            case '-':
                evaluation= num1 - num2;
                break;
            case '*':
                evaluation= num1 * num2;
                break;
            case '/':
                evaluation= num1 / num2;
                break;
            default:
                 evaluation= 'invalid'; 
         }
             setResult(evaluation); 
        };

        return (
            <div>
                <h1> Calculator </h1>
                <input type= "number" value= {n1} onChange={(e)=> setN1(e.target.value)}
                  placeholder="Enter the num 1"
                />
                
                
                <input type= "number" value= {n2} onChange={(e)=> setN2(e.target.value)}
                  placeholder="Enter the num 2"
                />
                 
                 <div>
                    <button onClick={() =>  Calculate('+')}>  + </button>
                    <button onClick={() => Calculate('-')}>  - </button>
                    <button onClick={() => Calculate('*')}>  * </button>
                    <button onClick={() => Calculate('/')}>  / </button>
                 </div>
                 {result !== null  &&  <p> Result: {result} </p>}

            </div>
        );
    }

    export default Calc;

                
   


        