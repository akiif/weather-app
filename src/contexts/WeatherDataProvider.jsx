import React, { useContext, useState } from 'react';

const WeatherDataContext = React.createContext();

export function useWeatherData() {
  return useContext(WeatherDataContext);
}

export function WeatherDataProvider({ children }) {
  const [weatherData, setWeatherData] = useState(undefined);

  const updateWeatherData = (data) => {
    setWeatherData(data);
  }

  return (
    <WeatherDataContext.Provider value={{ weatherData, updateWeatherData }}>
      {children}
    </WeatherDataContext.Provider>
  );
}