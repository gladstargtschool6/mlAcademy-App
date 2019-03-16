import React, { useGlobal, useState } from 'reactn';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { notify } from 'react-notify-toast';

import { withAuthService } from '../../Auth';

import './Header.scss';
import logo from '../../assets/img/logos/text_black.png';

const propTypes = {
  authService: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
const defaultProps = {};

function HeaderNoAuth(props) {
  const { authService, history } = props;
  const [isActive, setIsActive] = useState(false);
  const [, setUser] = useGlobal('user');

  function handleLogin() {
    authService.login().then(newUser => {
      if (newUser) {
        localStorage.setItem('user', JSON.stringify(newUser));
        setUser(newUser);
        notify.show('You have been logged in successfully!', 'success');
        history.replace('/');
      }
    });
  }

  return (
    <nav
      className="navbar"
      aria-label="main navigation"
      style={{
        borderBottom: 'solid 1px #dddddd',
      }}
    >
      <div className="navbar-brand">
        <NavLink className="navbar-item" to="/" activeClassName="is-active">
          <img src={logo} alt="home" />
        </NavLink>
        <button
          type="button"
          aria-label="Show Menu"
          className={`burger hamburger hamburger--vortex
            ${isActive && ` is-active`}`}
          onClick={() => setIsActive(!isActive)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
      </div>
      <div className={isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
        <div className="navbar-start">
          <NavLink className="navbar-item" to="/login" activeClassName="is-active">
            <span className="icon" style={{ marginRight: 5 }}>
              <i className="fas fa-lg fa-graduation-cap" />
            </span>
            Learn
          </NavLink>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button
                onClick={handleLogin}
                type="button"
                to="/signup"
                className="button is-primary"
              >
                <strong>Log In</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

HeaderNoAuth.propTypes = propTypes;
HeaderNoAuth.defaultProps = defaultProps;

export default withRouter(withAuthService(HeaderNoAuth));
