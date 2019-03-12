import React from 'react';
import { notify } from 'react-notify-toast';
import { withRouter } from 'react-router-dom';
<<<<<<< HEAD
import Firebase from 'firebase';
import useForm from 'useForm';
=======

import { withFirebase } from '../../Auth/Firebase';
import useForm from '../../helpers/useForm';
>>>>>>> mlacademy-frontend/frontend
import './ForgotWindow.scss';

ForgotWindow.defaultProps = {
  label: 'Forgot Password?',
  redirectLink: '/login'
};

function ForgotWindow(props) {
  const { values, handleChange, handleSubmit } = useForm(handleForgot);
<<<<<<< HEAD
  const { label, redirectLink } = props;

  async function handleForgot() {
    const { email } = values;
    try {
      await Firebase.sendResetEmail(email);
      notify.show('Please check your email to reset your password ✌️', 'success');
      props.history.replace(redirectLink);
    } catch (error) {
      notify.show(error.message, 'error');
    }
=======
  const { firebase, history, label, redirectLink } = props;

  async function handleForgot() {
    const { email } = values;

    firebase
      .doPasswordReset(email)
      .then(() => {
        notify.show('Please check your email to reset your password ✌️', 'success');
        history.replaceState(redirectLink);
      })
      .catch(error => {
        notify.show(error.message, 'error');
      });
>>>>>>> mlacademy-frontend/frontend
  }

  return (
    <div className="box form-card">
      <label className="label has-text-centered has-text-weight-semibold is-size-4">{label}</label>
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
        <br />
        <button type="submit" className="button is-block is-success is-fullwidth">
          Send password reset email
        </button>
        <br />
      </form>
    </div>
  );
}

<<<<<<< HEAD
export default withRouter(ForgotWindow);
=======
export default withFirebase(withRouter(ForgotWindow));
>>>>>>> mlacademy-frontend/frontend
