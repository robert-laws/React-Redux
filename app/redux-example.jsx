var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
}

var nextHobbyId = 1;
var nextMovieId = 1;

var nameReducer = (state = 'Anonymous', action) => {
  switch(action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
}

var hobbiesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ]
    case 'REMOVE_HOBBY':
      return state.filter((hobby) => hobby.id !== action.id);
    default:
      return state;
  }
}

var moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMovieId++,
          title: action.title,
          genre: action.genre
        }
      ]
    case 'REMOVE_MOVIE':
      return state.filter((movie) => movie.id !== action.id);
    default:
      return state;
  }
}

var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
})

var store = redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

var unsubscribe = store.subscribe(() => {
  var state = store.getState();
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Bob'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Running'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Reading'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Sports'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Matrix',
  genre: 'Sci-Fi'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Office Space',
  genre: 'Comedy'
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 2
})

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1
})

console.log('New State', store.getState());
