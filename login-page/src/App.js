import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Log from "../src/Log";
import Dashboard from './Dashboard'; // Create this component
import './atslogo.png';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Log/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>
    </Router>
  );
}

export default App;
