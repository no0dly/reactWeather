var React = require('react');

var WeatherResult = ({location, temp}) => {
    return (
        <h3 className="text-center">{location} weather is {temp} degree</h3>
    );
};

module.exports = WeatherResult;
