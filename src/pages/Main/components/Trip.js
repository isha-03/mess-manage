import React, { useState } from 'react';
import { BsChatFill } from "react-icons/bs";
import { FiPlus,FiMinus } from "react-icons/fi";
export default function Trip() {
    const [added,setAdded]=useState(false);
  return (
    <>

    <div className="container border border-2 p-3" style={{borderRadius:10, width:800,backgroundColor:'#c1bebe'}}>
        <div>
        <button type="button" class="btn btn-outline-secondary pb-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
        </button>
        </div>
        <div className="text-center">
        <h1>Details</h1>
        </div>
        <div className='my-3'>
        <div class="d-flex my-3 border align-items-center" style={{borderRadius:15, backgroundColor:'white'}}>
            <div class="p-2 flex-fill">Trip ID</div>
            <div class="p-2 flex-fill">10123</div>
        </div>
        <div class="d-flex my-3 border align-items-center" style={{borderRadius:15, backgroundColor:'white'}}>
            <div class="p-2 flex-fill">Destination</div>
            <div class="p-2 flex-fill">Patiala</div>
        </div>
        <div class="d-flex my-3 border align-items-center" style={{borderRadius:15, backgroundColor:'white'}}>
            <div class="p-2 flex-fill">From</div>
            <div class="p-2 flex-fill">Pathankot</div>
        </div>
        <div class="d-flex my-3 border align-items-center" style={{borderRadius:15, backgroundColor:'white'}}>
            <div class="p-2 flex-fill">Duration</div>
            <div class="p-2 flex-fill">7 days</div>
        </div>
        <div class="d-flex my-3 border align-items-center" style={{borderRadius:15, backgroundColor:'white'}}>
            <div class="p-2 flex-fill">Gender Pref</div>
            <div class="p-2 flex-fill">Both</div>
        </div>
        
        <div className="p-2 border">
        <h5>Members</h5>
        <div class="d-flex my-3 border align-items-center" style={{borderRadius:15, backgroundColor:'white'}}>
            <div class="p-2 flex-fill">1.</div>
            <div class="p-2 flex-fill">Khushi</div>
            <div class="p-2 flex-fill">Female</div>
            
            <div class="p-2 flex-fill">
                <button type="button" class="btn btn-outline-info">
                    <BsChatFill/>
                </button>
            </div>
        </div>
        
        <div class="d-flex my-3 border align-items-center" style={{borderRadius:15, backgroundColor:'white'}}>
            <div class="p-2 flex-fill">2.</div>
            <div class="p-2 flex-fill">Aman</div>
            <div class="p-2 flex-fill">Male</div>
            
            <div class="p-2 flex-fill">
                 <button type="button" class="btn btn-outline-info">
                    <BsChatFill/>
                </button>
            </div>
        </div>

        <div class="d-flex my-3 border align-items-center" style={{borderRadius:15, backgroundColor:'white'}}>
            <div class="p-2 flex-fill">3.</div>
            <div class="p-2 flex-fill">Dhriti</div>
            <div class="p-2 flex-fill">Female</div>
            
         
                {added===false?
                    <div class="py-2 flex-fill ps-5">
                        <button type="button" class="btn btn-outline-success" onClick={()=>setAdded(true)}>
                            <FiPlus/>
                        </button>
                        <button type="button" class="ms-2 btn btn-outline-danger">
                            <FiMinus/>
                        </button>
                    </div>
               
                :
                <div class="py-2 flex-fill ">
                <button type="button" class="btn btn-outline-info">
                    <BsChatFill/>
                </button>
                </div>
          
            }

           
        </div>
        </div>
        </div>
    </div>
    </>
  );
}
