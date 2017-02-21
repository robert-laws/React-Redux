var React = require('react');
var TaskItem = require('TaskItem');

var TaskList = React.createClass({
  getDefaultProps: function() {
    return {
      importance: "high level",
      viewTasks: false
    }
  },
  getInitialState() {
    return {
      viewTasks: this.props.viewTasks
    }
  },
  updateViewTasks: function() {
    this.setState({
      viewTasks: true
    });
  },
  render: function() {
    var { tasks, isMember } = this.props;
    var listStyle = isMember ? "#29C" : "#F00"
    var taskItems = tasks.map((tasks) =>
      <TaskItem key={tasks.id} id={tasks.id} name={tasks.name} completed={tasks.completed} />
    )
    return (
        <div style={{color: listStyle}}>
          {taskItems}
          <hr/>
          <div>{this.state.viewTasks ? this.props.importance : '...empty...'}</div>
          <button onClick={this.updateViewTasks}>Update View Tasks</button>
        </div>
    );
  }
});

module.exports = TaskList;
