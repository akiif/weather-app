import React from 'react';
import { toast } from "react-toastify";
import LocationIcon from '../assets/images/location.svg';

// import api
import { getWeatherDataFromLocation } from '../api/weather.api';

// import contexts
import { useWeatherData } from '../contexts/WeatherDataProvider';

const options = {
  enableHighAccuracy: true,
};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

function WeatherLocationSearch() {
  const { updateWeatherData } = useWeatherData();

  const getCurrentLocation = (callback) => {
    if (!navigator.geolocation) {
      callback(undefined);
    }
    return navigator.geolocation.getCurrentPosition((location) => {
      callback(location);
    })
  }

  const handleClick = () => {
    getCurrentLocation(async (location) => {
      if (!location) {
        toast.error('Geolocation is not supported by your browser!');
      } else {
        const { coords } = location;
        toast.info(`Latitude: ${coords.latitude}, Longitude: ${coords.longitude}`);
        const fetchedData = await getWeatherDataFromLocation(coords);
        if (fetchedData.response && fetchedData.response.status === 404) {
          return toast.error("No city found!");
        }
        updateWeatherData(fetchedData);
      }
    }, error, options);
  }

  return (
    <button className='weather-loc-btn' onClick={handleClick}>
      <p>Current Location</p>
      <img className='location-icon' src={LocationIcon} alt="location-icon" />
    </button>
  );
}

export default WeatherLocationSearch;