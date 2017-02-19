var redux = require('redux');

console.log('Starting redux example');

var reducer = (state = { name: 'Anonymous' }, action) => {
  // state = state || { name: 'Bob' }; // default argument

  return state;
}

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);
