export const BACKEND_WEATHER = process.env.REACT_APP_STAGE === 'prod' ? 'https://martinbobbio-weather.herokuapp.com/v1/current/' : 'http://192.168.99.100:8084/v1/current/';
export BACKEND_FORECAST = process.env.REACT_APP_STAGE === 'prod' ? 'https://martinbobbio-weather.herokuapp.com/v1/forecast/' : 'http://192.168.99.100:8084/v1/forecast/';
export BACKEND_LOCATION = process.env.REACT_APP_STAGE === 'prod' ? 'https://martinbobbio-weather.herokuapp.com/v1/location/' : 'http://192.168.99.100:8084/v1/location/';
