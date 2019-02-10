import React from 'react';
import { Box } from 'grommet';

const Header = props => (
  <Box
    align="center"
    background="brand"
    direction="row"
    elevation="medium"
    height="60px"
    justify="between"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    style={{ zIndex: '1' }}
    tag="header"
    {...props}
  />
);

export default Header;
