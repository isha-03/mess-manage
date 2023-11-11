import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Main from './pages/Main/Main';
import Login from './pages/Login/Loginme';
import Forgot from './pages/Forgot/Forgot';
import Signup from './pages/Signup/Signup';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/Login" element={<Main/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Forgotpass" element={<Forgot/>} />
      </Routes>
    </Router>
    
    </>
  );
  
}

export default App;
