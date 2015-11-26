import React from 'react';

var Repos = React.createClass({
    render() {
        return (
            <div>
                REPOS <br/>
                Username: {this.props.username} <br/>
                Repos: {this.props.repos} <br/>
            </div>
        )
    }
});

module.exports = Repos;
