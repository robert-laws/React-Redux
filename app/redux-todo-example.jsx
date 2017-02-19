var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  name: 'UNKNOWN',
  todos: []
}

var reducer = (state = stateDefault, action) => {
  switch(action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      }
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      }
    default:
      return state;
  }
}

var store = redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  // console.log('name is', state.name);
  document.getElementById('reduxTest').innerHTML = state.name;
});
// unsubscribe(); // callback function to unsubscribe

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'work'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Kal Kool'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Jim Jupe'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Bob Cobb'
});
