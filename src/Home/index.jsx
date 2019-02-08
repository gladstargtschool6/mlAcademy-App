import React from 'react';
import { Box } from 'grommet/es6';
import logo from '../img/logo_text_white.svg';

function Home() {
  return (
    <Box height="100%" background="accent-1">
      <img src={logo} alt="LOgo" />
    </Box>
  );
}
export default Home;
