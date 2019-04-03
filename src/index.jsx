import React, { setGlobal } from 'reactn';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Notifications from 'react-notify-toast';

import App from './components/App/App';
import AuthService, { AuthContext } from './Auth';
import * as serviceWorker from './serviceWorker';

import './index.scss';

setGlobal({
  user: JSON.parse(localStorage.getItem('user')),
});

ReactDOM.render(
  <Router>
    <AuthContext.Provider value={new AuthService()}>
      <Notifications options={{ timeout: 1500, wrapperId: 'toast' }} />
      <App />
    </AuthContext.Provider>
  </Router>,
  // eslint-disable-next-line
  document.getElementById('root')
);
serviceWorker.register();
