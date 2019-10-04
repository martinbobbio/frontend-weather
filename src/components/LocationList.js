import React from "react";
import PropTypes from "prop-types";
import WeatherLocation from "./WeatherLocation";
import "./styles.css";

const LocationList = ({ cities, onSelectedLocation }) => {
  const handleWeatherLocationClick = city => {
    onSelectedLocation(city);
  };
  const initComponents = cities =>
    cities.map(city => (
      <WeatherLocation
        key={city.key}
        city={city.name}
        onWeatherLocationClick={() => handleWeatherLocationClick(city.name)}
        data={city.data}
      />
    ));

  return <div className="location-list">{initComponents(cities)}</div>;
};

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func
};

export default LocationList;
