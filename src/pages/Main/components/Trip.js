import React from 'react';

export default function Trip() {
  return (
    <>

    <div className="container border border-2 p-3" style={{borderRadius:10, width:800}}>
        <div>
        <button type="button" class="btn btn-outline-secondary pb-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
        </button>
        </div>
        <div className="text-center">
        <h1>Trip Status</h1>
        </div>
        <div className='my-3'>
        <div class="d-flex my-3 border align-items-center" style={{borderRadius:15}}>
            <div class="p-2 flex-fill">Trip ID</div>
            <div class="p-2 flex-fill">10123</div>
        </div>
        <div class="d-flex my-3 border align-items-center" style={{borderRadius:15}}>
            <div class="p-2 flex-fill">Destination</div>
            <div class="p-2 flex-fill">Patiala</div>
        </div>
        <div class="d-flex my-3 border align-items-center" style={{borderRadius:15}}>
            <div class="p-2 flex-fill">From</div>
            <div class="p-2 flex-fill">Pathankot</div>
        </div>
        <div class="d-flex my-3 border align-items-center" style={{borderRadius:15}}>
            <div class="p-2 flex-fill">Duration</div>
            <div class="p-2 flex-fill">7 days</div>
        </div>
        <div class="d-flex my-3 border align-items-center" style={{borderRadius:15}}>
            <div class="p-2 flex-fill">Gender Pref</div>
            <div class="p-2 flex-fill">Both</div>
        </div>
        
        <div className="p-2 border">
        <h5>Members</h5>
        <div class="d-flex my-3 border align-items-center" style={{borderRadius:15}}>
            <div class="p-2 flex-fill">1.</div>
            <div class="p-2 flex-fill">Khushi</div>
            <div class="p-2 flex-fill">Female</div>
            
            <div class="p-2 flex-fill">
                <button type="button" class="btn btn-outline-danger">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                    </svg>
                </button>
            </div>
        </div>
        
        <div class="d-flex my-3 border align-items-center" style={{borderRadius:15}}>
            <div class="p-2 flex-fill">2.</div>
            <div class="p-2 flex-fill">Aman</div>
            <div class="p-2 flex-fill">Male</div>
            
            <div class="p-2 flex-fill">
                <button type="button" class="btn btn-outline-danger">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                    </svg>
                </button>
            </div>
        </div>

        <div class="d-flex my-3 border align-items-center" style={{borderRadius:15}}>
            <div class="p-2 flex-fill">3.</div>
            <div class="p-2 flex-fill">Dhriti</div>
            <div class="p-2 flex-fill">Female</div>
            
            <div class="py-2 flex-fill ps-5">
                <button type="button" class="btn btn-outline-success">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                    </svg>
                </button>
                <button type="button" class="ms-2 btn btn-outline-danger">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                    </svg>
                </button>
            </div>
        </div>
        </div>
        </div>
    </div>
    </>
  );
}
