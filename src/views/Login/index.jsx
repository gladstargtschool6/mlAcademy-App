import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, FormField, TextInput } from 'grommet';
import * as Icons from 'grommet-icons';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Config } from '../../Config';

import logo from '../../img/logo_brand.svg';

const propTypes = {
  history: PropTypes.object.isRequired
};
const defaultProps = {};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goTo(route) {
    this.props.history.push(route);
  }

  render() {
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
            <TextInput placeholder="Username" pad />
            <TextInput placeholder="Password" pad />
            <Button label="login" primary />
            <Button label="signup" />
          </Box>
        </Box>
      </Box>
    );
  }
}

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

export default withRouter(Login);
