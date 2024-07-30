import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './ Log';
import Dashboard from './Dashboard'; // Create this component

function Ap() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Log/>} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default Ap;
