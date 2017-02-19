var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <div className="row"><h2>Boilerplate 3 ------ New Project</h2></div>,
  document.getElementById('app')
);

// require('./redux-example.jsx');
require('./redux-todo-example.jsx')
