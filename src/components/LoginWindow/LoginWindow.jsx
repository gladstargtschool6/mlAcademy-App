import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { notify } from 'react-notify-toast';

import useForm from '../../helpers/useForm';
import { withFirebase } from '../../Auth/Firebase';

import './LoginWindow.scss';

const propTypes = {
  firebase: PropTypes.object.isRequired,
  label: PropTypes.string,
  redirectLink: PropTypes.string,
};
const defaultProps = {
  label: 'Log In',
  redirectLink: '/topics',
};

function LoginWindow(props) {
  const { values, handleChange, handleSubmit } = useForm(signin);
  const { firebase, label, redirectLink } = props;

  async function signin() {
    const { email, password } = values;
    firebase
      .doSignIn(email, password)
      .then(() => {
        notify.show('You have been logged in successfully!', 'success');
        props.history.replace(redirectLink);
      })
      .catch(error => notify.show(error.message, 'error'));
  }

  return (
    <div className="box form-card">
      <p className="label has-text-centered has-text-weight-semibold is-size-4">{label}</p>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Email Address</label>
          <div className="control">
            <input
              aria-label="email"
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
          <p className="label">Password</p>
          <div className="control">
            <input
              aria-label="password"
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
        onClick={() => {
          props.history.push('/signup');
        }}
        className="button is-block is-info is-fullwidth is-outlined"
      >
        Not Signed Up?
      </button>
      <br />
      <button
        onClick={() => {
          props.history.push('/forgot');
        }}
        className="act-like-link is-size-7"
      >
        Trouble Logging In?
      </button>
    </div>
  );
}

LoginWindow.propTypes = propTypes;
LoginWindow.defaultProps = defaultProps;

export default withFirebase(withRouter(LoginWindow));
