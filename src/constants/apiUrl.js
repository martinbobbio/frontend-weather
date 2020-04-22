let BACKEND_WEATHER, BACKEND_FORECAST, BACKEND_LOCATION = '';

if(process.env.REACT_APP_STAGE === 'prod'){
  BACKEND_WEATHER = "https://martinbobbio-weather.herokuapp.com/v1/current/";
  BACKEND_FORECAST = "https://martinbobbio-weather.herokuapp.com/v1/forecast/";
  BACKEND_LOCATION = "https://martinbobbio-weather.herokuapp.com/v1/location/";
} else if(process.env.REACT_APP_STAGE === 'docker'){
  BACKEND_WEATHER = "http://192.168.99.100:8084/v1/current/";
  BACKEND_FORECAST = "http://192.168.99.100:8084/v1/forecast/";
  BACKEND_LOCATION = "http://192.168.99.100:8084/v1/location/";
} else {
  BACKEND_WEATHER = "http://localhost:8080/v1/current/";
  BACKEND_FORECAST = "http://localhost:8080/v1/forecast/";
  BACKEND_LOCATION = "http://localhost:8080/v1/location/";
}

export const BACKEND_WEATHER;
export const BACKEND_FORECAST;
export const BACKEND_LOCATION;
