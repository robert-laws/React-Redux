var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var DataLoader = require('DataLoader');

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <DataLoader />,
  document.getElementById('app')
);

// require('./examples/redux-example.jsx');
// require('./examples/redux-todo-example.jsx')
