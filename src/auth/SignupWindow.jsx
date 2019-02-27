import React from 'react';
import { notify } from 'react-notify-toast';
import { Link, withRouter } from 'react-router-dom';
import Firebase from '../auth/firebase';
import useForm from '../useForm';

SignupWindow.defaultProps = {
  label: 'Sign Up'
};

function SignupWindow(props) {
  const { label } = props;
  const { values, handleChange, handleSubmit } = useForm(signup);

  async function signup() {
    console.log(values);
    const { name, email, password } = values;

    try {
      await Firebase.register(name, email, password);
      props.history.replace('/');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        props.history.replace('/login');
        notify.show('Looks like you already have an account 🎉 Please sign in!', 'warning');
      }
      console.log(error);
      notify.show(error.message, 'error');
    }
  }

  return (
    <div className="box" style={{ 'max-width': '400px' }}>
      <label className="label has-text-centered has-text-weight-semibold is-size-4">{label}</label>
      <br />
      <form autocomplete="off" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label has-text-weight-light">Enter First Name</label>
          <div className="control">
            <input
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

        <button type="submit" value="Submit" className="button is-block is-info is-fullwidth">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default withRouter(SignupWindow);
