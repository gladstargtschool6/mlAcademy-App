import React, { useEffect, useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { notify } from 'react-notify-toast';
import Firebase from '../../auth/firebase';
import { useGlobalState } from '../../state';
import logo from '../../img/logos/text_black.svg';

function Header(props) {
  const { history } = props;
  const [isActive, setIsActive] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useGlobalState('auth');
  const [name, setName] = useGlobalState('name');

  useEffect(() => {
    Firebase.isInitialized().then(val => {
      setIsAuthenticated(val);
    });
    setName(Firebase.getCurrentUsername());
  });

  function handleLogout() {
    Firebase.logout();
    setIsAuthenticated(false);
    notify.show('You have been logged out successfully!', 'warning');
    history.replace('/');
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
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">
                <span className="icon" style={{ marginRight: 5 }}>
                  <i className="fas fa-lg fa-user-circle" />
                </span>
                My Account
              </div>

              <div className="navbar-dropdown">
                <div className="navbar-item">Hi, {name}</div>
                <hr className="navbar-divider" />
                <a href="#" className="navbar-item" onClick={handleLogout}>
                  <span className="icon" style={{ marginRight: 5 }}>
                    <i className="fas fa-lg fa-sign-in-alt" />
                  </span>
                  Log out
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
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