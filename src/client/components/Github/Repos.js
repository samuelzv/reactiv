import React from 'react';

var Repos = React.createClass({
    render() {
        return (
            <div>
                REPOS <br/>
                Username: {this.props.username} <br/>
                Bio: {this.props.bio} <br/>
            </div>
        )
    }
});

module.exports = Repos;
