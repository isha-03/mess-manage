import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Create from './components/Create';
import Search from './components/Search';
import Status from './components/Status';
function App() {
  const [option,setoption]=useState('Create');

  return (
    <div className='w-100 '>
    <Navbar/>;
    <div className='my-3 mx-auto w-50 border border-2 text-center p-2'>
    <button type="button" class="btn btn-outline-dark mx-5" onClick={()=>setoption('Create')} >Create</button>
    <button type="button" class="btn btn-outline-dark mx-5" onClick={()=>setoption('Search')}>Search</button>
    <button type="button" class="btn btn-outline-dark mx-5 " onClick={()=>setoption('Status')}>Status</button>
    </div>
    {option==='Create'?<Create/>:(option==='Search'?<Search/>:<Status/>)}

    </div>
  );
}

export default App;
