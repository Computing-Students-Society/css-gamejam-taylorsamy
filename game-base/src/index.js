import React from 'react';
import { render } from 'react-dom';

// Required for app-wide data storage
import { Provider } from 'react-redux';
import configureStore from './Redux/Store/configureStore'

// Entry node to app
import App from './App';
import './index.css';

const store = configureStore();
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);