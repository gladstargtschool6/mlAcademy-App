import React from 'react';
import { notify } from 'react-notify-toast';
import { withRouter } from 'react-router-dom';
<<<<<<< HEAD
import Firebase from 'firebase';
import useForm from 'useForm';
import './SignupWindow.scss';

SignupWindow.defaultProps = {
  label: 'Sign Up'
};

function SignupWindow(props) {
  const { label } = props;
=======

import useForm from '../../helpers/useForm';
import { withFirebase } from '../../Auth/Firebase';

import './SignupWindow.scss';

SignupWindow.defaultProps = {
  label: 'Sign Up',
  buttonStyle: 'info'
};

function SignupWindow(props) {
  const { buttonStyle, label, firebase, history } = props;
>>>>>>> mlacademy-frontend/frontend
  const { values, handleChange, handleSubmit } = useForm(signup);

  async function signup() {
    const { name, email, password } = values;
<<<<<<< HEAD
    try {
      await Firebase.register(name, email, password);
      props.history.replace('/');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        props.history.push('/login');
        notify.show('Looks like you already have an account 🎉 Please sign in!', 'warning');
      }
      notify.show(error.message, 'error');
    }
=======
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
>>>>>>> mlacademy-frontend/frontend
  }

  return (
    <div className="box form-card">
      <label className="label has-text-centered has-text-weight-semibold is-size-4">{label}</label>
      <br />
<<<<<<< HEAD
      <form autoComplete="nope" onSubmit={handleSubmit}>
=======
      <form autocomplete="off" onSubmit={handleSubmit}>
>>>>>>> mlacademy-frontend/frontend
        <div className="field">
          <label className="label has-text-weight-light">Enter First Name</label>
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
          <label className="label has-text-weight-light">Email Address</label>
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
          <label className="label has-text-weight-light">Password</label>
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

<<<<<<< HEAD
        <button type="submit" value="Submit" className="button is-block is-info is-fullwidth">
=======
        <button
          type="submit"
          value="Submit"
          className={`button is-block is-${buttonStyle} is-fullwidth`}
        >
>>>>>>> mlacademy-frontend/frontend
          Sign Up
        </button>
      </form>
    </div>
  );
}

<<<<<<< HEAD
export default withRouter(SignupWindow);
=======
export default withFirebase(withRouter(SignupWindow));
>>>>>>> mlacademy-frontend/frontend
