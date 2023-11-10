import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Create from './components/Create';
import Search from './components/Search';
import Status from './components/Status';
function App() {
  return (
    <>
    <Navbar/>;
    <Create/>;
    <Search/>;
    <Status/>;
    </>
  );
}

export default App;
