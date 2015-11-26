import React from 'react';

var Notes = React.createClass({
    render() {
        return (
            <div>
                Notes <br/>
                Username: {this.props.username} <br/>
                Notes: {this.props.notes} <br/>
            </div>
        )
    }
});

module.exports = Notes;