import React from 'react';

// import components
import WeatherInputForm from './WeatherInputForm';
import WeatherLocationSearch from './WeatherLocationSearch';

function WeatherForm() {
  return (
    <div className='weather-form'>
      <WeatherInputForm />
      <WeatherLocationSearch />
    </div>
  );
}

export default WeatherForm;