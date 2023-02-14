import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/index.css';

// import context provider
import { WeatherDataProvider } from './contexts/WeatherDataProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WeatherDataProvider>
      <App />
    </WeatherDataProvider>
  </React.StrictMode>,
);
