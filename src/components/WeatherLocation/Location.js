import React from "react";
import PropTypes from "prop-types";
import './styles.css';

const Location = ({ city, current }) => {
  return (
    <div className="location-container">
      <h1 className={current ? 'c-black' : ''}>{current && 'My city: '}{city}</h1>
    </div>
  );
};

Location.propTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;
