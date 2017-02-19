var React = require('react');
var TaskItem = require('TaskItem');

var TaskList = React.createClass({
  render: function() {
    var { tasks } = this.props;
    var taskItems = tasks.map((tasks) =>
      <TaskItem key={tasks.id} name={tasks.name} />
    )
    return (
        <div>
          {taskItems}
        </div>
    );
  }

});

module.exports = TaskList;
