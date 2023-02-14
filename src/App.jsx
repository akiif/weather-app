import React from 'react'

// import contexts
import { useWeatherData } from './contexts/WeatherDataProvider';

// import Components
import ToastWrapper from './components/ToastWrapper';
import Header from "./components/Header";
import WeatherForm from './components/WeatherForm';
import WeatherDataContainer from './components/WeatherDataContainer';
import Footer from './components/Footer';

function App() {
  const { weatherData } = useWeatherData();
  return (
    <div className="App">
      <ToastWrapper />
      <div className="container">
        <Header />
        <WeatherForm />
        {weatherData && <WeatherDataContainer />}
      </div>
      <Footer />
    </div>
  )
}

export default App