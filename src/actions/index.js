import Axios from 'axios';

const API_KEY = 'cff2b3ac2c15c46e376f9d74c86eaf5c';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = async city => {
  const URL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;

  const response = await Axios.get(URL);
  console.log(response);
  return { type: FETCH_WEATHER, payload: response };
};
