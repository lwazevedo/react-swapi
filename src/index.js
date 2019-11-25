import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import LoadingProvider from './Config/LoadingProvider';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const options = {
  position: 'bottom right',
  timeout: 4000,
  offset: '30px',
  transition: 'scale'
};

ReactDOM.render(
  (
    <AlertProvider template={AlertTemplate} {...options}>
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </AlertProvider>
  ),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
