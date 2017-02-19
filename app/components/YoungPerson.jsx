var React = require('react');

var YoungPerson = React.createClass({
  render: function() {
    return (
      <div>
        <h5>This is a young person..., a member of the {this.props.team}</h5>
      </div>
    )
  }
});

module.exports = YoungPerson;
