import React from 'react';
import { notify } from 'react-notify-toast';
import { withRouter } from 'react-router-dom';

import { withFirebase } from '../../Auth/Firebase';
import useForm from '../../helpers/useForm';

import './ChangePasswordWindow.scss';

ChangePasswordWindow.defaultProps = {
  label: 'Update Password',
  redirectLink: '/'
};

function ChangePasswordWindow(props) {
  const { values, handleChange, handleSubmit } = useForm(handleReset);
  const { firebase, history, label, redirectLink } = props;

  async function handleReset() {
    const { password1, password2 } = values;
    if (password1 !== password2) notify.show("The passwords don't match 😵", 'error');
    firebase
      .doPasswordUpdate(password1)
      .then(() => {
        notify.show('Your password has been reset 🤗', 'success');
        history.replaceState(redirectLink);
      })
      .catch(error => {
        notify.show(error.message, 'error');
      });
  }

  return (
    <div className="box form-card">
      <label className="label has-text-centered has-text-weight-semibold is-size-4">{label}</label>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              aria-label="password1"
              className="input"
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password1}
              required
            />
            <label className="label">Re-enter Password</label>
            <input
              aria-label="password2"
              className="input"
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password2}
              required
            />
          </div>
        </div>
        <br />
        <button type="submit" className={`button is-block is-success is-fullwidth`}>
          Update Password
        </button>
        <br />
      </form>
    </div>
  );
}

export default withFirebase(withRouter(ChangePasswordWindow));
