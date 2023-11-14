import React from 'react';
import { FaBell } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
export default function Unavailable() {
    const navigate=useNavigate();
  return (
    <>
    <Navbar/>
    <div className='my-5'>
    <div className="container border border-2 p-3" style={{borderRadius:10, width:800}}>
        <div>
        
        <button type="button" class="btn btn-outline-secondary pb-2" onClick={()=>navigate(-1)}>
            <IoMdArrowBack />
        </button>
      
        </div>
        <div className="text-center">
        <h1>Search Trip</h1>
        </div>
        <div className="border my-3 text-center">
            <h5 className='my-4'>OOPS!! No trip available</h5>
            <button type="button" class="btn my-3 btn-outline-secondary">
              Alert Me 
              <FaBell className='ml-2'/>
            </button>
        </div>
        </div>
    </div>
    </>
  );
}
