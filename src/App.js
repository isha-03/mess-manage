import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Main from './pages/Main/Main';
import Login from './pages/Login/Loginme';
import Forgot from './pages/Forgot/Forgot';
import Signup from './pages/Signup/Signup';
import Profile from './pages/Profile/Profile';
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
        <Route path="/Forgotpass/Signup" element={<Signup/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/home" element={<Main/>} />
      </Routes>
    </Router>
    
    </>
  );
  
}

export default App;
