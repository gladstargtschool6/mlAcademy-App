import React from 'react';
import { notify } from 'react-notify-toast';
import { withRouter } from 'react-router-dom';
import Firebase from './firebase';
import useForm from '../useForm';
import './auth.scss';
Forgot.defaultProps = {
  redirectLink: '/login'
};
function Forgot(props) {
  const { values, handleChange, handleSubmit } = useForm(handleForgot);
  const { redirectLink } = props;

  async function handleForgot() {
    const { email } = values;
    try {
      await Firebase.resetPassword(email);
      notify.show('Please check your email to reset your password ✌️', 'success');
      props.history.replace(redirectLink);
    } catch (error) {
      notify.show(error.message, 'error');
    }
  }

  return (
    <div className="full-height-bg card-container has-background-primary">
      <div className="box form-card">
        <label className="label has-text-centered has-text-weight-semibold is-size-4">
          Forgot password?
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
          <br />
          <button type="submit" className="button is-block is-success is-fullwidth">
            Send password reset email
          </button>
          <br />
        </form>
      </div>
    </div>
  );
}
export default withRouter(Forgot);
