import React from 'react';
import SignupWindow from '../auth/SignupWindow';

const Signup = props => {
  return (
    <div className="hero section is-primary is-fullheight-with-navbar flex">
      <div
        class="hero-body flex"
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
