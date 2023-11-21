import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchableDropdown from './Dropdown'
import axios from 'axios';

export default function Create() {
  const [duration,setDuration]=useState(1);
  const [tripData, setTripData] = useState({
    source: '',
    dest: '',
    date: "2022-03-25",
    genderPreference: [],
    duration: 1, // Default duration
  });
  const handleSourceChange = (event) => {
    console.log(event.target.value);
    setTripData({ ...tripData, source: event.target.value });
  };
  
  const handleDestChange = (event) => {
    setTripData({ ...tripData, dest: event.target.value });
  };
  
  const handleDateChange = (event) => {
    console.log(event.target.value);
    console.log(typeof event.target.value);
    setTripData({ ...tripData, date: event.target.value });
  };
  
  const handleGenderPreferenceChange = (event) => {
    const gender = event.target.value;
    const updatedPreferences = tripData.genderPreference.includes(gender)
      ? tripData.genderPreference.filter((preference) => preference !== gender)
      : [...tripData.genderPreference, gender];
  
    setTripData({ ...tripData, genderPreference: updatedPreferences });
  };
  
  const handleDurationChange = (event) => {
    setDuration(event.target.value);
    setTripData({ ...tripData, duration: parseInt(event.target.value) });
  };

  async function submitHandler(e)
  {
    // e.preventDefault();
   try {

    const response = await axios.post('http://localhost:4259/api/v1/trips/create', tripData);
    console.log(response.data); // Handle response appropriately
  } catch (error) {
    console.log('Error creating trip:', error);
    // Handle error, show message to the user, etc.
  }
    toast.success('Trip created successfully');
  }
  return (
    <>
    <div className="container border border-2 p-3" style={{borderRadius:10, width:800, backgroundColor:'#c1bebe'}}>
        <div className="text-center">
        <h1>Create Trip</h1>
        </div>
        <div className="input-group mb-3 my-3" >
        <label className="input-group-text" htmlFor="inputGroupSelect01">From</label>
        {/* <input type="text" aria-label="First name" className="form-control" /> */}
        <select  className="form-select" id="inputGroupSelect01" onChange={handleSourceChange}>
            <option selected >Choose source</option>
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

        <div className="input-group mb-3 ">
        <label className="input-group-text" htmlFor="inputGroupSelect01">Destination</label>
        {/* <input type="text" aria-label="First name" className="form-control" onChange={handleDestChange}/> */}
        <select className="form-select" id="inputGroupSelect01" onChange={handleDestChange}>
            <option selected>Choose Destination</option>
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
       
        <div className="input-group">
        <span className="input-group-text">   Date   </span>
        <input type="date" aria-label="First name" className="form-control" onChange={handleDateChange}/>
 
        </div>

        <div className="input-group my-3 mb-3 border" style={{borderRadius:7,backgroundColor:'white'}}>
        <span className="input-group-text"> Gender Preference </span>
        <div className="form-check form-check-inline my-3 mx-3">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Female" onChange={handleGenderPreferenceChange}/>
        <label className="form-check-label" htmlFor="inlineCheckbox1">Female</label>
        </div>
        <div className="form-check form-check-inline my-3">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Male" onChange={handleGenderPreferenceChange}/>
        <label className="form-check-label" htmlFor="inlineCheckbox2">Male</label>
        </div>
        </div>
        <div className="input-group my-3 mb-3 border" style={{ borderRadius: 7, backgroundColor:'white' }}>
        <span className="input-group-text">Duration</span>
        <input onChange={handleDurationChange}
          type="range"
          className="form-range"
          min="1"
          max="30"
          step="1"
          id="durationRange"
        />
        <label htmlFor="durationRange" className="form-label mx-3">
          <span id="durationValue">{duration}</span> days
        </label>
      </div>
        <div className="text-center">
        <button type="button" class="btn btn-success" onClick={submitHandler}>Create</button>
        </div>
        

    </div>
    </>
  );
}
