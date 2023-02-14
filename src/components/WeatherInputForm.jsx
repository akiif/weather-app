import React, { useState, useRef } from 'react'
import { toast } from 'react-toastify';
import { isMobile } from 'react-device-detect';
import SearchIcon from '../assets/images/search.svg';

// import api
import { getWeatherDataFromInput } from '../api/weather.api';

// import contexts
import { useWeatherData } from '../contexts/WeatherDataProvider';

function WeatherInputForm() {
  const { updateWeatherData } = useWeatherData();
  const [weatherInput, setWeatherInput] = useState('');
  const inputElement = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (weatherInput === "") {
      return toast.error("City/Zip-code cannot be empty")
    }
    
    const fetchedData = await getWeatherDataFromInput(weatherInput);
    if (fetchedData.response && fetchedData.response.status === 404) {
      return toast.error("No city found!");
    }
    updateWeatherData(fetchedData);
    setWeatherInput('');
    if (!isMobile) {
      inputElement.current.focus();
    }
  }

  return (
    <form className='weather-input-form' onSubmit={handleSubmit}>
      <input 
        type="text" 
        name='weather-input'
        placeholder='City name or Zip code'
        autoComplete='off'
        spellCheck="false"
        autoFocus
        value={weatherInput}
        onChange={(e) => {setWeatherInput(e.target.value)}}
        ref={inputElement}
      />
      <button className='search-btn'>
        <img className='search-icon' src={SearchIcon} alt="search" />
      </button>
    </form>
  );
}

export default WeatherInputForm