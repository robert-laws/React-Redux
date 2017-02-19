var React = require('react');

var OldPerson = React.createClass({
  render: function() {
    return (
      <div>
        <h5>This is an old person..., a member of the {this.props.team}</h5>
      </div>
    )
  }
});

module.exports = OldPerson;
