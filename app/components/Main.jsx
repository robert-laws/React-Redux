var React = require('react');
var User = require('User');

var Main = React.createClass({
  render: function() {
    return (
      <div className="row">
        <h1>Main Component</h1>
        <User name="Bob Cobb" age="28" date="April 3" />
      </div>
    )
  }
});

module.exports = Main;
