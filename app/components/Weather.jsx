var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherResult = require('WeatherResult');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState(){
        return {
            isLoading: false
        }
    },

    handleSearch(location){
        var that = this;
        console.log(123);
        this.setState({
            isLoading: true,
            location: undefined,
            temp: undefined
        });

        openWeatherMap.getTemp(location).then(function(data) {
            var town = data.list[0].name;
            var temp = data.list[0].main.temp;
            that.setState({
                location: town,
                temp: temp,
                isLoading: false,
            });
        }, function(message) {
            that.setState({isLoading: false});
        });
    },
    componentDidMount() {
        var location = this.props.location.query.location;
        if( location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },
    componentWillReceiveProps(newProps) {
        var location = newProps.location.query.location;
        if( location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },
    render() {
        var {location, temp, isLoading} = this.state;

        function renderMessage() {
            if( isLoading ) {
                return <h3 className="text-center">Fetching weather...</h3>
            } else if ( temp && location ) {
                return <WeatherResult location={location} temp={temp}/>
            }
        }

        return (
            <div>
                <h1 className="text-center top-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>

        );
    }
});

module.exports = Weather;
