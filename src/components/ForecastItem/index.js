import React from "react";
import PropTypes from "prop-types";
import WeatherData from "./../WeatherLocation/WeatherData";

const ForestItem = ({weekDay, hour, data}) => (
    <div>
        <h2>{formatDay(weekDay)} - {hour}hs</h2>
        <WeatherData data={data}/>
    </div>

)

const formatDay = (value) => {
    switch(value){
        case "dom.": return "Sunday"
        case "lun.": return "Monday"
        case "mar.": return "Tuesday"
        case "mié.": return "Wednesday"
        case "jue.": return "Thursday"
        case "vie.": return "Friday"
        case "sáb.": return "Saturday"
        default: return ""
    }
}

ForestItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
}

export default ForestItem;