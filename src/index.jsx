import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App/App';
import Notifications from 'react-notify-toast';
import { GlobalStateProvider } from 'state';
import './assets/styles/index.scss';
ReactDOM.render(
  <Router>
    <GlobalStateProvider>
      <Notifications />
      <App />
    </GlobalStateProvider>
  </Router>,
  document.getElementById('root')
);
serviceWorker.unregister();
