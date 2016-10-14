var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    onSearch(e) {
        e.preventDefault();
        var location = this.refs.topSearch.value;
        var encodedLocation = encodeURIComponent(location);
        if(location.length > 0) {
            this.refs.topSearch.value = '';
            window.location.hash = '/?location=' + encodedLocation;
        }
    },
    render() {
        return (
            <div className="top-bar nav-top">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">
                            React Weather App
                        </li>
                        <li>
                            <IndexLink to="/" activeClassName="active">Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="about" activeClassName="active">About</Link>
                        </li>
                      <li>
                            <Link to="examples" activeClassName="active">Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="text" ref="topSearch" placeholder="Search Weather"/>
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});
module.exports = Nav;
