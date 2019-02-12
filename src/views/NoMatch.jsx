import React from 'react';
import { Box, Heading } from 'grommet';

function NoMatch() {
  return (
    <Box
      style={{ 'background-image': 'linear-gradient(#7D4CDB, #6a45ba, #7D4CDB)' }}
      height="100%"
      justify="center"
      align="center"
    >
      <Heading color="white" size="xlarge">
        404
      </Heading>
    </Box>
  );
}
export default NoMatch;
