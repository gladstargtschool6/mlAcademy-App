import React, { useGlobal, useState } from 'reactn';
import PropTypes from 'prop-types';
import { A } from 'hookrouter';
import { withAuthService } from '../../Auth';

import logo from '../../assets/img/logos/text_black.png';
import './Header.scss';

const propTypes = {
  authService: PropTypes.object.isRequired,
};

const defaultProps = {};

function HeaderAuth(props) {
  const { authService } = props;
  const [user] = useGlobal('user');
  const [isActive, setIsActive] = useState(false);

  function handleLogout() {
    authService.logout();
  }

  return user ? (
    <nav
      className="navbar"
      aria-label="main navigation"
      style={{
        borderBottom: 'solid 1px #dddddd',
      }}
    >
      <div className="navbar-brand">
        <A className="navbar-item" href="/" activeClassName="is-active">
          <img src={logo} alt="home" />
        </A>
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
          <A className="navbar-item" href="/topics" activeClassName="is-active">
            <span className="icon" style={{ marginRight: 5 }}>
              <i className="fas fa-lg fa-graduation-cap" />
            </span>
            Learn
          </A>
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
        </div>
      </div>
    </nav>
  ) : null;
}

HeaderAuth.propTypes = propTypes;
HeaderAuth.defaultProps = defaultProps;

export default withAuthService(HeaderAuth);
