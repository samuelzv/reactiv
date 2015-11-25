import React from 'react';

var UserProfile = React.createClass({
    render() {
        return (
            <div>
                User Profile <br/>
                Username: {this.props.username} <br/>
                Bio: {this.props.bio} <br/>
            </div>
        )
    }
});

module.exports = UserProfile;