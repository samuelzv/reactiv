import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
const Main = require('./components/Main');

render((
    <Router>
        <Route path="/" component={Main}>
        </Route>
    </Router>), document.getElementById('main'));
