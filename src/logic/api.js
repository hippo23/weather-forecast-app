const fetchWeatherData = async (location) => {

  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6dadccaac38e2cc4644ae2b3a488b719`, { mode: 'cors' });

  let obj = await data.json();
  return obj;
}

const fetchForecastData = async (location) => {
  const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=6dadccaac38e2cc4644ae2b3a488b719`, { mode: 'cors' });

  let obj = await data.json();
  return (obj);
}

const fetchCoordinates = async (location) => {
  let data = await fetchWeatherData(location);

  let lat = data.coord.lat;
  let lon = data.coord.lon;

  return [lon, lat];
}

export { fetchCoordinates, fetchWeatherData, fetchForecastData };
