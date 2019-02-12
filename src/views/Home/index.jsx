import React from 'react';
import { Box, Heading } from 'grommet';
import logo from '../../img/logo_text_white.svg';

function Home() {
  return (
    <Box
      style={{ 'background-image': 'linear-gradient(#7D4CDB, #613bac, #7D4CDB)' }}
      height="100%"
      justify="center"
      align="center"
    >
      <Box margin="30px" animation="zoomIn">
        <img src={logo} alt="LOgo" />
        <Heading level={2} color="white">
          machine learning made easy
        </Heading>
      </Box>
    </Box>
  );
}
export default Home;
