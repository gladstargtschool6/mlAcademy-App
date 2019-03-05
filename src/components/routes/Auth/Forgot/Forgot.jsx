import React from 'react';
import { withRouter } from 'react-router-dom';
import ForgotWindow from '../../../ForgotWindow/ForgotWindow';
import './Forgot.scss';

function Forgot() {
  return (
    <div className="full-height-bg card-container has-background-primary">
      <ForgotWindow />
    </div>
  );
}
export default withRouter(Forgot);
