const React = require('react');
const Template = require('./Template');
const Content1 = require('./Content1');
const Router = require('react-router-component');
const Locations = Router.Locations;
const Location  = Router.Location;

var App = React.createClass({
    render() {
        return (
            <Template>
                <Locations>
                    <Location path="/index.html" handler={Content1}></Location>
                </Locations>
            </Template>
        );
    }
});

module.exports = App;
