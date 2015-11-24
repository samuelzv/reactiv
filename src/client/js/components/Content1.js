const React = require('react');

var Content1 = React.createClass({
    render() {
        return (
            <div>
                <p>Content1</p>
                {this.props.children}
            </div>
        );
    }
})

module.exports = Content1;
