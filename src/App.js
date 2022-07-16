import './output.css';
import React, { useState, useEffect } from "react";
import WeatherBar from './components/WeatherBar';
import MainPage from './components/MainPage';
import { fetchForecastData, fetchWeatherData } from './logic/api';

function App() {

  const [location, setLocation] = useState('London');

  const defaultWeatherData = async () => {
    let data = await fetchWeatherData(location);
    return data;
  }

  const defaultForecastData = async () => {
    let data = await fetchForecastData(location);
    console.log(data);
    return data;
  }

  const [weatherData, setWeatherData] = useState(() => defaultWeatherData());
  const [forecastData, setForecastData] = useState(() => defaultForecastData())


  const updateAllData = async () => {
    setWeatherData(await fetchWeatherData(location));
    setForecastData(await fetchForecastData(location));
  }

  const handleChangeLocation = (event) => {
    event.preventDefault();
    setLocation(event.target[0].value);
  }

  useEffect(() => {
    updateAllData();
  }, [location])

  return (
    <div className="App bg-white h-screen w-screen grid grid-cols-10">
      <MainPage data={weatherData} forecast={forecastData} onLocationChange={handleChangeLocation} />
      <WeatherBar />
    </div>
  );
}

export default App;
