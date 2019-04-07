import React, { useGlobal, useState } from 'reactn';
import PropTypes from 'prop-types';
import { notify } from 'react-notify-toast';
import { NavLink, withRouter } from 'react-router-dom';

import { withAuthService } from '../../Auth';

import logo from '../../assets/img/logos/text_black.png';
import './Header.scss';

const propTypes = {
  authService: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
const defaultProps = {};

function HeaderAuth(props) {
  const { authService, history } = props;
  const [isActive, setIsActive] = useState(false);
  const [user, setUser] = useGlobal('user');
  const location = history.location.pathname;

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

  function handleLogout() {
    authService.logout();
  }

  function toggleMenu() {
    setIsActive(!isActive);
  }

  function closeMenu() {
    setIsActive(false);
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
        <NavLink className="navbar-item" to="/" onClick={closeMenu}>
          <img src={logo} alt="home" />
        </NavLink>
        <button
          type="button"
          aria-label="Show Menu"
          className={`burger hamburger hamburger--vortex
            ${isActive && ` is-active`}`}
          onClick={toggleMenu}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
      </div>
      <div className={isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
        <div className="navbar-start">
          <NavLink
            className={`navbar-item ${location === '/topics' && `is-active`}`}
            to={user ? '/topics' : '/login'}
            onClick={closeMenu}
          >
            <span className="icon" style={{ marginRight: 5 }}>
              <i className="fas fa-lg fa-graduation-cap" />
            </span>
            Learn
          </NavLink>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">
                <span className="icon" style={{ marginRight: 5 }}>
                  <i className="fas fa-lg fa-user-circle" />
                </span>
                My Account
              </div>
              <div className="navbar-dropdown">
                <div className="navbar-item">
                  {`Hi, ${user.name.substring(user.name.indexOf(',') + 2)}`}
                </div>
                <hr className="navbar-divider" />
                {/* eslint-disable-next-line */}
                <a className="navbar-item" onClick={handleLogout}>
                  <span className="icon" style={{ marginRight: 5 }}>
                    <i className="fas fa-lg fa-sign-in-alt" />
                  </span>
                  Log out
                </a>
              </div>
            </div>
          ) : (
            <div className="navbar-item">
              <div className="buttons">
                <button onClick={handleLogin} type="button" to="/signup" className="btn is-primary">
                  <strong>Log In</strong>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

HeaderAuth.propTypes = propTypes;
HeaderAuth.defaultProps = defaultProps;

export default withRouter(withAuthService(HeaderAuth));
