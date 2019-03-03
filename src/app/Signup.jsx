import React from 'react';
import SignupWindow from '../auth/SignupWindow';

const Signup = () => {
  return (
    <div className="hero section is-primary is-fullheight-with-navbar flex">
      <div
        className="hero-body flex"
        style={{ 'justify-content': 'space-around', 'flex-wrap': 'wrap', width: '100%' }}
      >
        <div style={{ width: '400px' }}>
          <SignupWindow />
        </div>
      </div>
    </div>
  );
};

export default Signup;
