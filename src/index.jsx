import React, { setGlobal } from 'reactn';
import ReactDOM from 'react-dom';
import Notifications from 'react-notify-toast';

import App from './components/App/App';
import AuthService, { AuthContext } from './Auth';
import * as serviceWorker from './serviceWorker';

import './index.scss';

setGlobal({
  user: JSON.parse(localStorage.getItem('user')),
});

ReactDOM.render(
  <AuthContext.Provider value={new AuthService()}>
    <Notifications />
    <App />
  </AuthContext.Provider>,
  // eslint-disable-next-line
  document.getElementById('root')
);
serviceWorker.unregister();
