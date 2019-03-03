import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './app/Layout';
import Notifications from 'react-notify-toast';
import { GlobalStateProvider } from './state';
import './index.scss';
ReactDOM.render(
  <Router>
    <GlobalStateProvider>
      <Notifications />
      <Layout />
    </GlobalStateProvider>
  </Router>,
  document.getElementById('root')
);
serviceWorker.unregister();
