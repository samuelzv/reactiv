import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute } from 'react-router'
const Main = require('./components/Main');
const Home = require('./components/Home');
const Profile = require('./components/Profile');

render((
    <Router>
        <Route name="app" path="/" component={Main}>
            <Route name="profile" path="profile/:username" component={Profile} />

            <IndexRoute component={Home} />
        </Route>
    </Router>), document.getElementById('main'));
