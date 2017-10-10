import axios from 'axios';

const API_KEY = '8fe6d6398f64346edf7a0ab26166dbc6';//generate
//const URL = 'http://api.openweatchermap.org/data/2.5/forecast?appId=' + API_KEY + '&';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appId=${API_KEY}`;
// q=London,us
export const FEATCH_WEATHER = 'FEATCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FEATCH_WEATHER,
    payload: request
  }
}
