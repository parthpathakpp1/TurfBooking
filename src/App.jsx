// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import TurfDetails from './pages/TurfsDetail';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Add a route for TurfDetails */}
        <Route path="/turfs/:turfId" element={<TurfDetails />} />
      </Routes>
    </div>
  );
}

export default App;
