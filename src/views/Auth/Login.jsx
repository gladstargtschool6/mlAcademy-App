import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextInput } from 'grommet';
import * as Icons from 'grommet-icons';
import { notify } from 'react-notify-toast';
import { withRouter } from 'react-router-dom';
import Firebase from './firebase';

import logo from '../../img/logo_brand.svg';

const propTypes = {
  history: PropTypes.object.isRequired
};
const defaultProps = {};

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function login() {
    try {
      await Firebase.login(email, password);
      notify.show('You have been logged in successfully!', 'success');
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <Box
      style={{ 'background-image': 'linear-gradient(#7D4CDB, #613bac, #7D4CDB)' }}
      height="100%"
      justify="center"
      align="center"
    >
      <Box
        round="small"
        animation="zoomIn"
        width="30%"
        height="350px"
        elevation="large"
        background="white"
        pad="small"
        align="center"
      >
        <img src={logo} alt="Logo" height="40px" />
        <h1>login</h1>
        <Box gap="small" width="250px">
          <TextInput
            type="email"
            placeholder="Email"
            pad
            focusIndicator
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextInput
            type="password"
            placeholder="Password"
            pad
            focusIndicator
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button label="login" primary onClick={login} focusIndicator />
          <Button
            label="signup"
            onClick={() => {
              props.history.replace('/register');
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

export default withRouter(Login);
