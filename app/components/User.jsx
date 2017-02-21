var React = require('react');
var UserDetails = require('UserDetails');
var TaskList = require('TaskList');

var User = React.createClass({
  PropTypes: {
    firstName: React.PropTypes.string.isRequired,
    lastName: React.PropTypes.string.isRequired,
    score: React.PropTypes.number,
    isMember: React.PropTypes.bool
  },
  getDefaultProps: function() {
    return {
      score: 20,
      isMember: true,
      tasks: [
        { id: 1, name: 'Go to the event', completed: false },
        { id: 2, name: 'Meet the group', completed: true },
        { id: 3, name: 'Write a blog post', completed: false }
      ]
    }
  },
  getInitialState: function() {
    return {
      isMember: this.props.isMember
    }
  },
  render: function() {
    return (
      <div>
        <h2>User Component</h2>
        <UserDetails {...this.props} />
        <TaskList tasks={this.props.tasks} isMember={this.state.isMember} />
      </div>
    )
  }
});

module.exports = User;
