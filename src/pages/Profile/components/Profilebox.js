import React from 'react';

export default function Profilebox() {
  return (
    <>
        <div className="container border border-3" style={{width:800}}>
        <form className='my-3'>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Name</span>
                <input type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1"/>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon2">User-Name</span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon2"/>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon3">Email</span>
                <input type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon3"/>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon4">Phone-No.</span>
                <input type="tel" class="form-control" placeholder="Phone" aria-label="Phone" aria-describedby="basic-addon4"/>
            </div>
            <div class="input-group mb-3 border" style={{borderRadius:7}}>
                <span class="input-group-text" id="basic-addon5">Gender</span>
                <div className="px-3 pt-2">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                    <label class="form-check-label" for="inlineRadio1">Male</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label class="form-check-label" for="inlineRadio2">Female</label>
                </div>
                </div>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon5">Successful Trips</span>
                <input type="text" class="form-control" value="3" aria-label="Phone" aria-describedby="basic-addon4"/>
            </div>
        </form>
        </div>
    </>
  );
}
