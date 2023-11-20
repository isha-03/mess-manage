import React, { useState } from 'react';
import Select from 'react-select';

// A list of major Indian cities (this is not comprehensive)
const cities = [
    { value: '1', label: 'Mumbai' },
    { value: '2', label: 'Delhi' },
    { value: '3', label: 'Bangalore' },
    { value: '4', label: 'Agra' },
    { value: '5', label: 'Jaipur' },
    { value: '6', label: 'Chennai' },
    { value: '7', label: 'Hyderabad' },
    { value: '8', label: 'Ahmedabad' },
    { value: '9', label: 'Kolkata' },
    { value: '10', label: 'Udaipur' },
    { value: '11', label: 'Amritsar' },
    { value: '12', label: 'Chandigarh' },
    { value: '13', label: 'Manali' },
    { value: '14', label: 'Jammu' },
    { value: '15', label: 'Pune' },
    { value: '16', label: 'Surat' },
    { value: '17', label: 'Lucknow' },
    { value: '18', label: 'Kanpur' },
    { value: '19', label: 'Nagpur' },
    { value: '20', label: 'Visakhapatnam' },
    { value: '21', label: 'Indore' },
    { value: '22', label: 'Patna' },
    { value: '23', label: 'Vadodara' },
    { value: '24', label: 'Ghaziabad' },
    { value: '25', label: 'Nashik' },
    { value: '26', label: 'Prayagraj' },
    { value: '27', label: 'Coimbatore' },
    { value: '28', label: 'Guwahati' },
    { value: '29', label: 'Madurai' },
    { value: '30', label: 'Jabalpur' },
    { value: '31', label: 'Goa' },
    { value: '32', label: 'Patiala' },
  ];

const SearchableDropdown = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
  };

  return (
    <div >
      <Select
        value={selectedCity}
        onChange={handleCityChange}
        options={cities}
        isSearchable={true}
        placeholder="Choose city"
      />
      {/* {selectedCity && (
        <div>
          Selected City: {selectedCity.label} (Value: {selectedCity.value})
        </div>
      )} */}
    </div>
  );
};

export default SearchableDropdown;
