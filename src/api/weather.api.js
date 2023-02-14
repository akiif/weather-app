import axios from "axios";

const getWeatherDataFromInput = async (searchTerm) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=6573d4efd1d5a8a073edf58f672e5335`;
  const apiData = await makeApiCall(url);
  return apiData;
}

const getWeatherDataFromLocation = async (coords) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&appid=6573d4efd1d5a8a073edf58f672e5335`;
  const apiData = await makeApiCall(url);
  return apiData;
}

const makeApiCall = async (url) => {
  return await 
    axios.get(url)
      .then(res => res.data)
      .catch(err => err);
}

export {
  getWeatherDataFromInput,
  getWeatherDataFromLocation
}