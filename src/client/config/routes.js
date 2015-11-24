const React = require('react');
const Main = require('../components/Main');
const Home = require('../components/Home');
const Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
    <Route name="app" path="/" handler={Main}> </Route>
);
