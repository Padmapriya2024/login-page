//import { Input } from '@mui/material';
import React, {useState} from 'react';

function FormInput() {
    const [ input, setInput]= useState('');
    const [submittedText, setSubmittedText]= useState('');

const handleform = (e) => {
    e.preventDefault();
    setSubmittedText(input);
    setInput('');
}

return (
    <div>
      <h1>  Input Form</h1>
      <form onSubmit = {handleform}>
             <input type= "text" 
             value= {input}
              onChange={(e)=> setInput(e.target.value)}
               />
              <button type= "submit"> Submit</button>
              </form>
              <p> Submitted Text : {submittedText}</p> 
             
        </div>

);
}
export default FormInput;