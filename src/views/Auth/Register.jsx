import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextInput } from 'grommet';
import { notify } from 'react-notify-toast';
import { withRouter } from 'react-router-dom';
import Firebase from './firebase';

import logo from '../../img/logos/brand.svg';

const propTypes = {
  history: PropTypes.object.isRequired
};
const defaultProps = {};

function Register(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function onRegister() {
    try {
      await Firebase.register(name, email, password);
      props.history.replace('/');
    } catch (error) {
      notify.show(error.message, 'error');
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
        width="30%"
        height="350px"
        elevation="large"
        background="white"
        pad="small"
        align="center"
      >
        <img src={logo} alt="Logo" height="40px" />
        <h1>sign up</h1>
        <Box gap="small" width="250px" animation="fadeIn">
          <TextInput
            placeholder="First Name"
            pad
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <TextInput
            type="email"
            placeholder="Email"
            pad
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextInput
            type="password"
            placeholder="Password"
            pad
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button label="sign up" onClick={onRegister} />
        </Box>
      </Box>
    </Box>
  );
}

Register.propTypes = propTypes;
Register.defaultProps = defaultProps;

export default withRouter(Register);
