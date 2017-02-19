var React = require('react');

var OldPerson = React.createClass({
  render: function() {
    return (
      <div>
        <h5>This is an old person..., a member of the <span className="team-emphasis">{this.props.team}</span></h5>
      </div>
    )
  }
});

module.exports = OldPerson;
