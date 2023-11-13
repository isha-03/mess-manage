
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Create from './components/Create';
import Search from './components/Search';
import Status from './components/Status';
import Success from './components/Success';
import Trip from './components/Trip';
import Unavailable from './components/Unavailable';
export default function Main() {
  const [option,setoption]=useState('Create');
  return (
    <>
    <div className='w-100 '>
    
    <Navbar/>;
    <div className='my-3 mx-auto w-50 border border-2 text-center p-2'>
    <button type="button" class="btn btn-outline-dark mx-5" onClick={()=>setoption('Create')} >Create</button>
    <button type="button" class="btn btn-outline-dark mx-5" onClick={()=>setoption('Search')}>Search</button>
    <button type="button" class="btn btn-outline-dark mx-5 " onClick={()=>setoption('Status')}>Status</button>
    </div>
    {option==='Create'?<Create/>:(option==='Search'?<Search/>:<Status/>)}

    </div>
    <div className='my-5'>
    <Success/>
    </div>
    <div className="my-5">
      <Trip/>
    </div>
    <div className="my-5">
      <Unavailable/>
    </div>
    </>
  );
}
