import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Requiring the Reducer that we just made
import manageTasks from './reducers/manageTodo';

// set a store variable and then we are going to place it as a prop
// for Provider as well as App. 
let store = createStore(manageTasks);

// Below we are making store available to Provider.
// It's going to be looking for any changes to the state and
// then re-render App.

ReactDOM.render(
  <Provider store={store} >
      <App store={store} />
  </Provider>,
  document.getElementById('root'));
