import React from "react";
import WeatherIcons from "react-weathericons";
import PropTypes from "prop-types";
import { CLOUD, SUN, RAIN, SNOW, THUNDER, DRIZZLE } from "./../../../constants/weathers";
import './styles.css';

const icons = {
  [SUN]: "day-sunny",
  [CLOUD]: "cloud",
  [RAIN]: "rain",
  [SNOW]: "snow",
  [THUNDER]: "day-thunderstorm",
  [DRIZZLE]: "day-showers",
};

const getWeatherIcon = weatherState => {
  const icon = icons[weatherState];
  const sizeIcon = "4x";
  if (icon) return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />;
  else return <WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon} />;
};

const WeatherTemperature = ({ temperature, weatherState }) => (
  <div className="weather-temperature-container">
    {getWeatherIcon(weatherState)}
    <span className="temperature">{`${temperature}`}</span>
    <span className="temperature-type"> C°</span>
  </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number,
    weatherState: PropTypes.string
}

export default WeatherTemperature;
