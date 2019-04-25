import React, { useGlobal } from 'reactn';
import PropTypes from 'prop-types';
import { Redirect, withRouter } from 'react-router-dom';
import { notify } from 'react-notify-toast';

import { withAuthService } from '../../Auth';

const propTypes = {
  history: PropTypes.object.isRequired,
  authService: PropTypes.object.isRequired,
};
const defaultProps = {};

function Logout(props) {
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
  return <Redirect to="/" />;
}

Logout.propTypes = propTypes;
Logout.defaultProps = defaultProps;

export default withRouter(withAuthService(Logout));
