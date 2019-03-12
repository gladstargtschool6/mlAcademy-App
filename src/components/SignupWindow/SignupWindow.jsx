import React from 'react';
import PropTypes from 'prop-types';
import { notify } from 'react-notify-toast';
import { withRouter } from 'react-router-dom';

import useForm from '../../helpers/useForm';
import { withFirebase } from '../../Auth/Firebase';

import './SignupWindow.scss';

const propTypes = {
  buttonStyle: PropTypes.string,
  label: PropTypes.string,
  firebase: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
const defaultProps = {
  label: 'Sign Up',
  buttonStyle: 'info',
};

function SignupWindow(props) {
  const { buttonStyle, label, firebase, history } = props;
  const { values, handleChange, handleSubmit } = useForm(signup);

  async function signup() {
    const { name, email, password } = values;
    firebase
      .doCreateUser(name, email, password)
      .then(() => {
        notify.show(`You've been logged in! 👋`, 'warning');
        history.replace('/');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          history.push('/login');
          notify.show('Looks like you already have an account 🎉 Please sign in!', 'warning');
        }
        notify.show(error.message, 'error');
      });
  }

  return (
    <div className="box form-card">
      <p className="label has-text-centered has-text-weight-semibold is-size-4">{label}</p>
      <br />
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="field">
          <p className="label has-text-weight-light">Enter First Name</p>
          <div className="control">
            <input
              aria-label="first name"
              className="input"
              type="Name"
              name="name"
              onChange={handleChange}
              value={values.name}
              placeholder="First Name"
              required
            />
          </div>
        </div>
        <div className="field">
          <p className="label has-text-weight-light">Email Address</p>
          <div className="control">
            <input
              aria-label="email"
              className="input"
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email}
              placeholder="Email Address"
              required
            />
          </div>
        </div>
        <div className="field">
          <p className="label has-text-weight-light">Password</p>
          <div className="control">
            <input
              aria-label="password"
              className="input"
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password}
              placeholder="Password"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          value="Submit"
          className={`button is-block is-${buttonStyle} is-fullwidth`}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

SignupWindow.propTypes = propTypes;
SignupWindow.defaultProps = defaultProps;

export default withFirebase(withRouter(SignupWindow));
