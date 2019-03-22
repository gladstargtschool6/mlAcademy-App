import React, { useGlobal } from 'reactn';
import PropTypes from 'prop-types';
import { useRedirect } from 'hookrouter';
import { notify } from 'react-notify-toast';

import { withAuthService } from '../../Auth';

const propTypes = {
  history: PropTypes.object.isRequired,
  authService: PropTypes.object.isRequired,
};
const defaultProps = {};

function Login(props) {
  const { authService, history } = props;
  const [, setUser] = useGlobal('user');

  authService.login().then(newUser => {
    if (newUser) {
      localStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser);
      notify.show('You have been logged in successfully!', 'success');
      history.replace('/topics');
    }
  });
  useRedirect('/');
}

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

export default withAuthService(Login);
