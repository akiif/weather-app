import React from 'react';

// import icons
import WeatherIcons from '../assets/images/weatherIcons/weatherIcons';

// import contexts
import { useWeatherData } from '../contexts/WeatherDataProvider';

function WeatherDataContainer() {
  const { weatherData } = useWeatherData();
  return (
    <section className='weather-data-container'>
      <h2 className='city-name'>{weatherData.name}</h2>
      <h1 className='temperature'>
        <span id="temperature">{weatherData.main.temp}</span>
        <span className="celsius"> <sup>°C</sup></span>
      </h1>
      <h3 className="weather-description">{weatherData.weather[0].description}</h3>
      <img src={WeatherIcons[getWeatherIcon(weatherData.weather[0].icon)]} alt="weather icon" className='weather-img' />
      <p className="bottom-description">Cloudiness: {weatherData.clouds.all}%</p>
      <p className="bottom-description">Wind: {weatherData.wind.speed} m/s</p>
      <p className="bottom-description">Humidity: {weatherData.main.humidity}%</p>
    </section>
  );
}

export default WeatherDataContainer;


const getWeatherIcon = (icon) => {
  let weatherIcon = '';
  switch (icon) {
    case '01d':
      weatherIcon = 'ClearSkyDay';
      break;
    case '01n':
      weatherIcon = 'ClearSkyNight';
      break;
    case '02d':
      weatherIcon = 'FewCloudsDay';
      break;
    case '02n':
      weatherIcon = 'FewCloudsNight';
      break;
    case '03d':
    case '03n':
      weatherIcon = 'ScatteredClouds';
      break;
    case '04d':
    case '04n':
      weatherIcon = 'BrokenClouds';
      break;
    case '09d':
    case '09n':
      weatherIcon = 'ShowerRain';
      break;
    case '10d':
      weatherIcon = 'RainDay';
      break;
    case '10n':
      weatherIcon = 'RainNight';
      break;
    case '11d':
    case '11n':
      weatherIcon = 'Thunderstorm';
      break;
    case '13d':
    case '13n':
      weatherIcon = 'Snow';
      break;
    case '50d':
    case '50n':
      weatherIcon = 'Mist';
      break;
    default:
      weatherIcon = 'ClearSkyDay';
      break;
  }
  return weatherIcon;
}