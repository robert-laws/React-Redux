var React = require('react');
var UserDetails = require('UserDetails');

var User = React.createClass({
  render: function() {
    return (
      <div>
        <h2>User Component</h2>
        <UserDetails {...this.props} />
      </div>
    )
  }
});

module.exports = User;
