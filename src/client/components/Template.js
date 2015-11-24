const React = require('react');

var Template = React.createClass({
    render() {
        return (
            <div>
                <h1>This is the header of my template</h1>
                {this.props.children}
                <p>This is the footer</p>
             </div>

        );
    }
});

module.exports = Template;
