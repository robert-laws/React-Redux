var React = require('react');

var TaskItem = React.createClass({
  render: function() {
    var { id, name, completed } = this.props;
    return (
      <li>
        <span>{id}.</span> <input type="checkbox" checked={completed} /> Item: {name}
      </li>
    );
  }
});

module.exports = TaskItem;
