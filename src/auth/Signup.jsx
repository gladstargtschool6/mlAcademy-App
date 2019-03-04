import React from 'react';
import SignupWindow from './signup/SignupWindow';
import './auth.scss';

const Signup = () => {
  return (
    <div className="full-height-bg card-container has-background-primary">
      <SignupWindow />
    </div>
  );
};

export default Signup;
