import React from 'react';
import { Box, Heading } from 'grommet/es6';
import logo from '../img/logo_text_white.svg';

function Home() {
  return (
    <Box
      style={{ 'background-image': 'linear-gradient(#7D4CDB, #613bac, #7D4CDB)' }}
      height="97%"
      justify="center"
      align="center"
    >
      <Box margin="30px">
        <img src={logo} alt="LOgo" />
        <Heading level={2} color="white">
          machine learning made easy
        </Heading>
      </Box>
    </Box>
  );
}
export default Home;
