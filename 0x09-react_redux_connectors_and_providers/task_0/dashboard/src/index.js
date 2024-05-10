import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; // Import createStore from Redux
import { Provider } from 'react-redux'; // Import Provider from react-redux
import App from './App/App';
import uiReducer from './reducers/uiReducer'; // Import uiReducer

const store = createStore(uiReducer); // Create a Redux store containing uiReducer state

ReactDOM.render(
  <Provider store={store}> {/* Pass the store to Provider */}
    <App />
  </Provider>,
  document.getElementById('app')
);

