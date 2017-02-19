var React = require('react');

var TaskItem = React.createClass({
  render: function() {
    return (
      <li>
        Item: {this.props.name}
      </li>
    );
  }
});

module.exports = TaskItem;
