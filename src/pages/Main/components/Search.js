import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import SearchableDropdown from './Dropdown'
import Unavailable from '../../Unavailable';
export default function Search({setoption}) {
  const navigate=useNavigate();
  const [tripData, setTripData] = useState({
    source: '',
    dest: '',
    date: "2022-03-25",
    genderPreference: [],
    duration: 1, // Default duration
  });
  const [matchingTrips, setMatchingTrips] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const handleSourceChange = (event) => {
    console.log(event.target.value);
    setTripData({ ...tripData, source: event.target.value });
  };
  
  const handleDestChange = (event) => {
    setTripData({ ...tripData, dest: event.target.value });
  };
  
  const handleDateChange = (event) => {
    
    setTripData({ ...tripData, date: event.target.value });
  };
  
  const handleGenderPreferenceChange = (event) => {
    const gender = event.target.value;
    const updatedPreferences = tripData.genderPreference.includes(gender)
      ? tripData.genderPreference.filter((preference) => preference !== gender)
      : [...tripData.genderPreference, gender];
  
    setTripData({ ...tripData, genderPreference: updatedPreferences });
  };
  async function submitHandler(e)
  {
    // e.preventDefault();
    try {
      const response = await axios.get('http://localhost:4259/api/v1/trips/find', {
        params: {
          source: tripData.source,
          dest: tripData.dest,
          date: tripData.date,
          genderPreference: tripData.genderPreference.join(','), // Convert array to comma-separated string
        },
      }  );
      const { data } = response.data;

      if (data.length > 0) {
        setMatchingTrips(data);
        setShowResults(true);
      } else {
        setShowResults(false);
        navigate('/unavailable');
      }
   
      console.log(response.data); // Handle response appropriately
    } catch (error) {
      console.error('Error fetching trips:', error);
    
  }
}
  return (
    <>
    <div className="container border border-2 p-3 mb-4" style={{borderRadius:10, width:800,backgroundColor:'#c1bebe'}}>
        <div className="text-center">
        <h1>Search Trip</h1>
        </div>
        
        <div className="input-group mb-3 my-3" >
        <label className="input-group-text" htmlFor="inputGroupSelect01">From</label>
        {/* <input type="text" aria-label="First name" className="form-control" /> */}
        <select className="form-select" id="inputGroupSelect01" onChange={handleSourceChange}>
  <option defaultValue>Choose source</option>
  <option value="Chandigarh">Chandigarh</option>
  <option value="Delhi">Delhi</option>
  <option value="Gurgaon">Gurgaon</option>
  <option value="Jalandhar">Jalandhar</option>
  <option value="Ludhiana">Ludhiana</option>
  <option value="Patiala">Patiala</option>
  <option value="Bathinda">Bathinda</option>
  <option value="Barnala">Barnala</option>
  <option value="Sangrur">Sangrur</option>
</select>
        </div>

        <div className="input-group mb-3 ">
        <label className="input-group-text" htmlFor="inputGroupSelect01">Destination</label>
        {/* <input type="text" aria-label="First name" className="form-control" onChange={handleDestChange}/> */}
        <select className="form-select" id="inputGroupSelect01" onChange={handleDestChange}>
  <option defaultValue>Choose source</option>
  <option value="Chandigarh">Chandigarh</option>
  <option value="Delhi">Delhi</option>
  <option value="Gurgaon">Gurgaon</option>
  <option value="Jalandhar">Jalandhar</option>
  <option value="Ludhiana">Ludhiana</option>
  <option value="Patiala">Patiala</option>
  <option value="Bathinda">Bathinda</option>
  <option value="Barnala">Barnala</option>
  <option value="Sangrur">Sangrur</option>
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
        <div className="text-center">
        
        {/* <Link to={(showResults===false)?`/unavailable`:''}> */}
        <button type="button" class="btn btn-success" onClick={submitHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg> Search
        </button>
        </div>
        </div>
        {/* </Link> */}
        {
          showResults===true &&
          <div className="container border border-2" style={{ borderRadius: 10, width: 800, backgroundColor: '#c1bebe' }}>
      <div className="text-center my-3">
        <h1>Trips</h1>
      </div>

      <div className="d-flex my-3 border align-items-center" style={{ borderRadius: 15, backgroundColor: 'white' }}>
        <div className="p-2 flex-fill">No.</div>
        <div className="p-2 flex-fill">Source</div>
        <div className="p-2 flex-fill">Destination</div>
        <div className="p-2 flex-fill">Date</div>
        <div className="p-2 flex-fill">Members</div>
        {/* Add more columns here if needed */}
      </div>

      {matchingTrips.map((trip, index) => (
        <div className="d-flex my-3 border align-items-center text-center" style={{ borderRadius: 15, backgroundColor: 'white' }} key={trip._id}>
          <div className="p-2 flex-fill">{index + 1}.</div>
          <div className="p-2 flex-fill">{trip.source}</div>
          <div className="p-2 flex-fill">{trip.dest}</div>
          <div className="p-2 flex-fill">{trip.date}</div>
          <div className="px-5 flex-fill">{/* Display members or any other relevant data for each trip */}----</div>
          {/* Add more columns here if needed */}
        </div>
      ))}
    </div>

        }
        
    
    </>
  );
}
