import React from 'react';
import { withRouter } from 'react-router-dom';

import SignupWindow from '../SignupWindow/SignupWindow';
import LoginWindow from '../LoginWindow/LoginWindow';
import ForgotWindow from '../ForgotWindow/ForgotWindow';
import ChangePasswordWindow from '../ChangePasswordWindow/ChangePasswordWindow';

SplashContainer.defaultProps = {
  label: '',
  buttonStyle: 'info'
};

function SplashContainer(props) {
  const { type, label, buttonStyle } = props;
  return (
    <div className="full-height-bg card-container primary-grad">
      {
        {
          signup: (
            <SignupWindow
              buttonStyle={buttonStyle !== '' && buttonStyle}
              label={label !== '' ? label : 'Signup'}
            />
          ),
          login: (
            <LoginWindow
              buttonStyle={buttonStyle !== '' && buttonStyle}
              label={label !== '' ? label : 'Log In'}
            />
          ),
          forgot: (
            <ForgotWindow
              buttonStyle={buttonStyle !== '' && buttonStyle}
              label={label !== '' ? label : 'Please Enter Your Email'}
            />
          ),
          reset: (
            <ChangePasswordWindow
              buttonStyle={buttonStyle !== '' && buttonStyle}
              label={label !== '' ? label : 'Please Update Your Password'}
            />
          ),
          default: null
        }[type]
      }
    </div>
  );
}

export default withRouter(SplashContainer);
