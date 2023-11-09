import React from 'react';

export default function Create() {
  return (
    <>
    <div className="container">
        <h1>Create Trip</h1>

        <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupSelect01">From</label>
        <select class="form-select" id="inputGroupSelect01">
            <option selected>Choose source</option>
            <option value="1">Chandigarh</option>
            <option value="2">Delhi</option>
            <option value="3">Gurgaon</option>
            <option value="4">Jalandhar</option>
            <option value="5">Ludhiana</option>
            <option value="6">Patiala</option>
            <option value="7">Bathinda</option>
            <option value="8">Barnala</option>
            <option value="9">Sangrur</option>
        </select>
        </div>

        <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupSelect01">Destination</label>
        <select class="form-select" id="inputGroupSelect01">
            <option selected>Choose destination</option>
            <option value="1">Chandigarh</option>
            <option value="2">Delhi</option>
            <option value="3">Gurgaon</option>
            <option value="4">Jalandhar</option>
            <option value="5">Ludhiana</option>
            <option value="6">Patiala</option>
            <option value="7">Bathinda</option>
            <option value="8">Barnala</option>
            <option value="9">Sangrur</option>
        </select>
        </div>
       
        <div class="input-group">
        <span class="input-group-text">   Date   </span>
        <input type="date" aria-label="First name" class="form-control"/>
 
        </div>

        <div class="input-group my-3">
        <span class="input-group-text"> Gender </span>
        <div class="form-check form-check-inline mx-3 my-2">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
        <label class="form-check-label" for="inlineRadio1">female</label>
        </div>
        <div class="form-check form-check-inline my-2">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
        <label class="form-check-label" for="inlineRadio2">male</label>
        </div>
        </div>

        

    </div>
    </>
  );
}
