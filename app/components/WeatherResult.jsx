var React = require('react');

var WeatherResult = ({location, temp}) => {
    return (
        <p>{location} weather is {temp} degree</p>
    );
};

module.exports = WeatherResult;
