
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Create from './components/Create';
import Search from './components/Search';
import Status from './components/Status';
import MyImage from './bg.jpg'
// import Success from './components/Success';
import Trip from './components/Trip';

export default function Main() {
  const [option,setoption]=useState('Search');
  const [view,setView]=useState([false,false,false,false]);
  const bgImg = `url(${MyImage})`;
  return (
    <>
    <div className='w-100 bg-image ' id='123' style={{ backgroundImage: bgImg }}>
    
    <Navbar/>;
    <div className='my-3 mx-auto w-50 border border-2 text-center p-2' style={{backgroundColor:'#c1bebe', borderRadius:15}}>
    <button type="button" class="btn btn-light mx-5" onClick={()=>setoption('Create')} >Create</button>
    <button type="button" class="btn btn-light mx-5" onClick={()=>setoption('Search')}>Search</button>
    <button type="button" class="btn btn-light mx-5 " onClick={()=>setoption('Status')}>Status</button>
    </div>
    {option==='Create'?<Create/>:(option==='Search'?<Search/>:<Status view={view} setView={setView}/>)}

    
    {
        
      view.some((value) => value === true) && option==='Status'?<div className="my-5"><Trip/></div>:null
    }
    </div>

    </>
  );
}
