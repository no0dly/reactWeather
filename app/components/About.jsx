var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center top-title">About</h1>

            <p>This is an app build on React where you can search the weather in any town you want</p>

            <h5>What did I use to make it alive</h5>

            <ul>
                <li>
                    React
                </li>
                <li>
                    Open weather API
                </li>
                <li>
                    Heroku
                </li>
            </ul>

        </div>

    );
};

module.exports = About;
