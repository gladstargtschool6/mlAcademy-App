import React from 'react';
import { notify } from 'react-notify-toast';
import { withRouter } from 'react-router-dom';
import Firebase from 'firebase';
import useForm from 'useForm';
import './LoginWindow.scss';

LoginWindow.defaultProps = {
  label: 'Log In',
  redirectLink: '/topics'
};

function LoginWindow(props) {
  const { values, handleChange, handleSubmit } = useForm(signin);
  const { label, redirectLink } = props;

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
        <div className="field">
          <label className="label">Password</label>
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

export default withRouter(LoginWindow);
