import React from 'react';
import logo from './butterfly.png';
import Slideshow from './slideshow';
//import  Counter from './redux';
//import MyForm from './handlingevents';

function App() {

  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
    const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };
  return (
    <div className="App">
    <h1>
    Hello, {formatName(user)}!

    <img src={logo} alt="butterfly" height="90px" width="80px"/>
<Slideshow />

  </h1>
    </div>
  );
}

export default App;
