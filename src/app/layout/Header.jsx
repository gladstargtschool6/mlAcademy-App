import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { notify } from 'react-notify-toast';
import Firebase from '../../auth/firebase';
import { useGlobalState } from '../../state';

import { Text } from '../../components/logo';
import logo from '../../img/logos/text_black.svg';

function Header(props) {
  const [isActive, setIsActive] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useGlobalState('auth');
  const [name, setName] = useGlobalState('name');

  function handleLogout() {
    Firebase.logout();
    setIsAuthenticated(false);
    notify.show('You have been logged out successfully!', 'warning');
    props.history.replace('/');
  }

  return (
    <nav
      className="navbar"
      aria-label="main navigation"
      style={{
        borderBottom: 'solid 1px #dddddd'
      }}
    >
      <div className="navbar-brand">
        <NavLink className="navbar-item" to="/" activeClassName="is-active">
          <img src={logo} alt="home" />
        </NavLink>
        <button className="button navbar-burger" onClick={() => setIsActive(!isActive)}>
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
        <div className="navbar-start">
          <NavLink
            className="navbar-item"
            to={isAuthenticated ? '/topics' : '/login'}
            activeClassName="is-active"
          >
            <span className="icon" style={{ marginRight: 5 }}>
              <i className="fas fa-lg fa-graduation-cap" />
            </span>
            Learn
          </NavLink>
        </div>
        {isAuthenticated ? (
          <div class="navbar-end">
            <div class="navbar-item has-dropdown is-hoverable">
              <div class="navbar-link">
                <span className="icon" style={{ marginRight: 5 }}>
                  <i className="fas fa-lg fa-user-circle" />
                </span>
                My Account
              </div>

              <div class="navbar-dropdown">
                <div class="navbar-item">Hi, {name}</div>
                <hr class="navbar-divider" />
                <a className="navbar-item" onClick={handleLogout}>
                  <span className="icon" style={{ marginRight: 5 }}>
                    <i className="fas fa-lg fa-sign-in-alt" />
                  </span>
                  Log out
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <NavLink to="/signup" className="button is-primary">
                  <strong>Sign Up</strong>
                </NavLink>
                <NavLink to="/login" className="button is-light">
                  Log in
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default withRouter(Header);
