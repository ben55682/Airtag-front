import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Location from './comps/Location'
import Dashboard from './comps/Dashboard';
import './App.css'

const App = () => {
  const location = window.location;
  return (
    <div className="h-screen">
      <Router>  
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/location" element={<Location />} />
          </Routes>
      </Router>
    </div>
  );
};

export default App
