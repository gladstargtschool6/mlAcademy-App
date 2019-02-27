import React from 'react';
import { notify } from 'react-notify-toast';
import { Link, withRouter } from 'react-router-dom';
import Firebase from '../auth/firebase';
import useForm from '../useForm';

import { useGlobalState } from '../state';
Login.defaultProps = {
  redirectLink: '/topics'
};
function Login(props) {
  const { values, handleChange, handleSubmit } = useForm(signin);
  const [isAuthenticated, setIsAuthenticated] = useGlobalState('auth');
  const { redirectLink } = props;
  async function signin() {
    const { email, password } = values;
    try {
      await Firebase.login(email, password);
      notify.show('You have been logged in successfully!', 'success');
      props.history.replace(redirectLink);
    } catch (error) {
      notify.show(error.message, 'error');
    }
  }

  return (
    <div className="hero section is-primary is-fullheight-with-navbar flex">
      <div
        class="hero-body flex"
        style={{ 'justify-content': 'space-around', 'flex-wrap': 'wrap', width: '100%' }}
      >
        <div style={{ width: '400px' }}>
          <div className="box">
            <label className="label has-text-centered has-text-weight-semibold is-size-4">
              Log In
            </label>
            <br />

            <form onSubmit={handleSubmit}>
              <div className="field">
                <label className="label">Email Address</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    required
                  />
                </div>
              </div>
              <br />
              <button type="submit" className="button is-block is-info is-fullwidth">
                Login
              </button>
              <br />
            </form>
            <button
              onClick={e => {
                props.history.replace('/signup');
              }}
              className="button is-block is-info is-fullwidth is-outlined"
            >
              Not Signed Up?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} //<Link to="/signup">Not Signed Up?</Link>

export default withRouter(Login);
