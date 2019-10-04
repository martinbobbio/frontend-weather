import axios from 'axios';
import { BACKEND_FORECAST, BACKEND_WEATHER } from "../constants/apiUrl";
import transformForecast from "./../services/transformForecast";
import transformWeather from "./../services/transformWeather";

export const SET_CITY = "SET_CITY";
export const SET_FORECAST_DATA = "SET_FORECAST_DATA";

export const SET_WEATHER_CITY = "SET_WEATHER_CITY";
export const GET_WEATHER_CITY = "GET_WEATHER_CITY";

const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload });
const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload })

export const setSelectedCity = payload => {
  return (dispatch, getState) => {
    
    dispatch(setCity(payload));
    const state = getState();
    const date = state.cities[payload] && state.cities[payload].forecastDataDate;
    const dateNow = new Date();
    if(date && (dateNow - date) < 1*60*1000) return;
    return axios.get(BACKEND_FORECAST+payload)
      .then(response => response.data.forecast)
      .then(weather_data => {
        const forecastData = transformForecast(weather_data);
        dispatch(setForecastData({ city: payload, forecastData }));
      });
  };
};

export const setWeather = payload => {
  
  return dispatch => {
    payload.forEach(city => {
      dispatch(getWeatherCity(city));
      return axios.get(BACKEND_WEATHER+city)
      .then(response => {
        return response.data.weather;
      })
      .then(weather_data => {
        const weather = transformWeather(weather_data);
        dispatch(setWeatherCity({city,weather}));
      });
    });
  }
}
