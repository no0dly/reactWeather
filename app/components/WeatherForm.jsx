var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit(e) {
        e.preventDefault();
        var location = this.refs.location.value;

        if (location.length > 0) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    },
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <input type="text" ref="location" placeholder="Enter city name"/>
                </div>
                <div>
                    <input type="submit" value="Get Weather"/>
                </div>
            </form>
        );
    }
});

module.exports = WeatherForm;
