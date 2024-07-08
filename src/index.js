import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar'; // Ensure the correct path and capitalization
import Register  from './components/register';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Router>
      <Navbar /> {/* Corrected the typo */}
      <Routes>
        <Route path="register" element={<h1>Register</h1>} />
        <Route path="login" element={<h1>Login</h1>} />
        <Route path="logout" element={<h1>Logout</h1>} />
      </Routes>
    </Router>
  </div>
);
