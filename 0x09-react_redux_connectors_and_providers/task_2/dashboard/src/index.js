import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'; // Import createStore and applyMiddleware from Redux
import { Provider } from 'react-redux'; // Import Provider from react-redux
import thunk from 'redux-thunk'; // Import thunk middleware
import App from './App/App';
import uiReducer from './reducers/uiReducer'; // Import uiReducer

const store = createStore(uiReducer, applyMiddleware(thunk)); // Apply thunk middleware to the store

ReactDOM.render(
  <Provider store={store}> {/* Pass the store to Provider */}
    <App />
  </Provider>,
  document.getElementById('app')
);

