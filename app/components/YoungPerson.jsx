var React = require('react');

var YoungPerson = React.createClass({
  render: function() {
    return (
      <div>
        <h5>This is a young person..., a member of the <span className="team-emphasis">{this.props.team}</span></h5>
      </div>
    )
  }
});

module.exports = YoungPerson;
