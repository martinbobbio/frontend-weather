import React from 'react';
import PropTypes from "prop-types";
import './styles.css';

const WeatherExtraInfo = ({humidity,wind}) => (
    <div className="weather-extra-info-container ">
        <span className="extra-info-text">{`Humidity: ${humidity}%`}</span>
        <span className="extra-info-text">{`Wind: ${wind}`}</span>
    </div>
)

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;
