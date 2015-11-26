const React = require('react');
import { Router } from 'react-router';
const UserProfile = require('./Github/UserProfile');
const Repos = require('./Github/Repos');
const Notes = require('./Notes/Notes');
const createFragment = require('react-addons-create-fragment');
const ReactFireMixin = require('reactfire');
const Firebase = require('firebase');

var Profile = React.createClass({
    mixins:[Router.State, ReactFireMixin],
    getInitialState() {
        return {
            notes: ['hola','que tal'],
            bio: createFragment({name:'tyler'}),
            repos: ['1', '2','3']
        }
    },
    componentDidMount() {
        var ref = new Firebase('https://dazzling-torch-9825.firebaseio.com');
        this.bindAsArray(ref, 'notes');
    },
    componentWillUnmount() {
        this.unbind('notes');
    },
    render() {
        var username = this.props.params.username;
        return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile username={username} bio={this.state.bio} />
                </div>
                <div className="col-md-4">
                    <Repos username={username} repos={this.state.repos} />
                </div>
                <div className="col-md-4">
                    <Notes username={username}  notes={this.state.notes} />
                </div>
            </div>
        )
    }
});

module.exports = Profile;
