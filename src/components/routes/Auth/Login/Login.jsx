import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginWindow from '../../../LoginWindow/LoginWindow';
import './Login.scss';

function Login() {
  return (
    <div className="full-height-bg card-container has-background-primary">
      <LoginWindow />
    </div>
  );
}
export default withRouter(Login);
