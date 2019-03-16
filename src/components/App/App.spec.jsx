import React, { setGlobal } from 'reactn';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Notifications from 'react-notify-toast';
import AuthService, { AuthContext } from '../../Auth';

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  setGlobal({
    user: JSON.parse(localStorage.getItem('user')),
  });
  ReactDOM.render(
    <Router>
      <AuthContext.Provider value={new AuthService()}>
        <Notifications />
        <App />
      </AuthContext.Provider>
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
