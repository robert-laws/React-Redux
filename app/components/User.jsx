var React = require('react');
var UserDetails = require('UserDetails');
var TaskList = require('TaskList');

var tasks = [
  { name: 'Write this book with love <3', completed: false },
  { name: 'Learn isomorphic web apps', completed: false },
  { name: 'Study FLUX architecture', completed: true }
]

var User = React.createClass({
  render: function() {
    return (
      <div>
        <h2>User Component</h2>
        <UserDetails {...this.props} />
        <TaskList tasks={tasks} />
      </div>
    )
  }
});

module.exports = User;
