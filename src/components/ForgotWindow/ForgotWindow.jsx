import React from 'react';
import PropTypes from 'prop-types';
import { notify } from 'react-notify-toast';
import { withRouter } from 'react-router-dom';

import { withFirebase } from '../../Auth/Firebase';
import useForm from '../../helpers/useForm';
import './ForgotWindow.scss';

const propTypes = {
  firebase: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  label: PropTypes.string,
  redirectLink: PropTypes.string,
};

const defaultProps = {
  label: 'Forgot Password?',
  redirectLink: '/login',
};

function ForgotWindow(props) {
  const { values, handleChange, handleSubmit } = useForm(handleForgot);
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
  }

  return (
    <div className="box form-card">
      <p className="label has-text-centered has-text-weight-semibold is-size-4">{label}</p>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="field">
          <p className="label">Email Address</p>
          <div className="control">
            <input
              aria-label="email"
              className="input"
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email || ''}
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

ForgotWindow.propTypes = propTypes;
ForgotWindow.defaultProps = defaultProps;

export default withFirebase(withRouter(ForgotWindow));
