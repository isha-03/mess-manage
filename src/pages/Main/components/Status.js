import React, { useState } from 'react';
import Trip from './Trip';

export default function Status({view,setView}) {
    const handleViewToggle = (index) => {
        const updatedView = Array(view.length).fill(false); // Set all indices to false
        updatedView[index] = !view[index]; // Toggle the clicked index
        setView(updatedView);
      };
  return (
    <>
    <div className="container border border-2" style={{borderRadius:10, width:800,backgroundColor:'#c1bebe'}}>
        <div className="text-center my-3">
            <h1>Trip Status</h1>
        </div>
        
        <div class="d-flex my-3 border align-items-center" style={{borderRadius:15, backgroundColor:'white'}}>
            <div class="p-2 flex-fill">1.</div>
            <div class="p-2 flex-fill">Destination</div>
            <div class="p-2 flex-fill">1-Dec-2023</div>
            <div class="p-2 flex-fill">Members</div>
            <div class="p-2 flex-fill">
                <button type="button" class="btn btn-outline-danger">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                    </svg>
                </button>
                <button type="button" className={`btn btn-outline-info ml-2 ${view[0] ? 'text-primary' : 'text-danger'}`} onClick={() => handleViewToggle(0)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                <path d="M8 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1zM2.146 2.854a10.518 10.518 0 0 1 0 10.292A9.97 9.97 0 0 1 1 8a9.97 9.97 0 0 1 1.146-4.146 10.518 10.518 0 0 1 0 10.292A9.97 9.97 0 0 1 1 8a9.97 9.97 0 0 1 1.146-4.146zm11.708 0A9.97 9.97 0 0 1 15 8a9.97 9.97 0 0 1-1.146 4.146 10.518 10.518 0 0 1 0-10.292A9.97 9.97 0 0 1 15 8a9.97 9.97 0 0 1-1.146 4.146zM8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
              </svg>
            </button>
            </div>
        </div>
        <div class="d-flex my-3 border align-items-center" style={{borderRadius:15, backgroundColor:'white'}}>
            <div class="p-2 flex-fill">2.</div>
            <div class="p-2 flex-fill">Destination</div>
            <div class="p-2 flex-fill">1-Dec-2023</div>
            <div class="p-2 flex-fill">Members</div>
            <div class="p-2 flex-fill">
                <button type="button" class="btn btn-outline-danger">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                    </svg>
                </button>
                <button type="button" className={`btn btn-outline-info ml-2 ${view[1] ? 'text-primary' : 'text-danger'}`} onClick={() => handleViewToggle(1)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                <path d="M8 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1zM2.146 2.854a10.518 10.518 0 0 1 0 10.292A9.97 9.97 0 0 1 1 8a9.97 9.97 0 0 1 1.146-4.146 10.518 10.518 0 0 1 0 10.292A9.97 9.97 0 0 1 1 8a9.97 9.97 0 0 1 1.146-4.146zm11.708 0A9.97 9.97 0 0 1 15 8a9.97 9.97 0 0 1-1.146 4.146 10.518 10.518 0 0 1 0-10.292A9.97 9.97 0 0 1 15 8a9.97 9.97 0 0 1-1.146 4.146zM8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
              </svg>
            </button>
            </div>
        </div>
        <div class="d-flex my-3 border align-items-center" style={{borderRadius:15, backgroundColor:'white'}}>
            <div class="p-2 flex-fill">3.</div>
            <div class="p-2 flex-fill">Destination</div>
            <div class="p-2 flex-fill">1-Dec-2023</div>
            <div class="p-2 flex-fill">Members</div>
            <div class="p-2 flex-fill">
                <button type="button" class="btn btn-outline-danger">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                    </svg>
                </button>
                <button type="button" className={`btn btn-outline-info ml-2 ${view[2] ? 'text-primary' : 'text-danger'}`} onClick={() => handleViewToggle(2)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                <path d="M8 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1zM2.146 2.854a10.518 10.518 0 0 1 0 10.292A9.97 9.97 0 0 1 1 8a9.97 9.97 0 0 1 1.146-4.146 10.518 10.518 0 0 1 0 10.292A9.97 9.97 0 0 1 1 8a9.97 9.97 0 0 1 1.146-4.146zm11.708 0A9.97 9.97 0 0 1 15 8a9.97 9.97 0 0 1-1.146 4.146 10.518 10.518 0 0 1 0-10.292A9.97 9.97 0 0 1 15 8a9.97 9.97 0 0 1-1.146 4.146zM8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
              </svg>
            </button>
            </div>
        </div>
        <div class="d-flex my-3 border align-items-center" style={{borderRadius:15, backgroundColor:'white'}}>
            <div class="p-2 flex-fill">4.</div>
            <div class="p-2 flex-fill">Destination</div>
            <div class="p-2 flex-fill">1-Dec-2023</div>
            <div class="p-2 flex-fill">Members</div>
            <div class="p-2 flex-fill gap-4">
                <button type="button" class="btn btn-outline-danger">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                    </svg>
                </button>
                <button type="button" className={`btn btn-outline-info ml-2 ${view[3] ? 'text-primary' : 'text-danger'}`} onClick={() => handleViewToggle(3)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                <path d="M8 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1zM2.146 2.854a10.518 10.518 0 0 1 0 10.292A9.97 9.97 0 0 1 1 8a9.97 9.97 0 0 1 1.146-4.146 10.518 10.518 0 0 1 0 10.292A9.97 9.97 0 0 1 1 8a9.97 9.97 0 0 1 1.146-4.146zm11.708 0A9.97 9.97 0 0 1 15 8a9.97 9.97 0 0 1-1.146 4.146 10.518 10.518 0 0 1 0-10.292A9.97 9.97 0 0 1 15 8a9.97 9.97 0 0 1-1.146 4.146zM8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
              </svg>
            </button>
            </div>
        </div>
    </div>
    
    
    </>
  );
}
