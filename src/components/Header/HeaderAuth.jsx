import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { notify } from 'react-notify-toast';

import { AuthUserContext } from '../Session/Session';
import { withFirebase } from '../../Auth/Firebase';

import logo from '../../assets/img/logos/text_black.png';
import './Header.scss';

function HeaderAuth(props) {
  const { firebase, history } = props;
  const [isActive, setIsActive] = useState(false);

  function handleLogout() {
    firebase.doSignOut().then(() => {
      notify.show('You have been logged out successfully!', 'warning');
      history.replace('/');
    });
  }

  return (
    <AuthUserContext.Consumer>
      {authUser => (
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
            <button
              aria-label="Show Menu"
              className={`burger hamburger hamburger--vortex
            ${isActive && ` is-active`}`}
              onClick={() => setIsActive(!isActive)}
            >
              <span class="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </div>
          <div className={isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
            <div className="navbar-start">
              <NavLink className="navbar-item" to="/topics" activeClassName="is-active">
                <span className="icon" style={{ marginRight: 5 }}>
                  <i className="fas fa-lg fa-graduation-cap" />
                </span>
                Learn
              </NavLink>
            </div>
            <div className="navbar-end">
              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">
                  <span className="icon" style={{ marginRight: 5 }}>
                    <i className="fas fa-lg fa-user-circle" />
                  </span>
                  My Account
                </div>

                <div className="navbar-dropdown">
                  <div className="navbar-item">Hi, {authUser.displayName}</div>
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
            </div>
          </div>
        </nav>
      )}
    </AuthUserContext.Consumer>
  );
}

export default withFirebase(withRouter(HeaderAuth));
