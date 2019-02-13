import React from 'react';
import { Box, Heading, Layer } from 'grommet';
import * as Icons from 'grommet-icons';

import loading from '../../img/loading.svg';
import logo from '../../img/logo_blue.svg';

export function TooSmall() {
  return (
    <Layer full>
      <Box
        style={{ 'background-image': 'linear-gradient(#7D4CDB, #6a45ba, #7D4CDB)' }}
        height="100%"
        align="center"
        animate={false}
        justify="center"
      >
        <img src={logo} alt="" height="100px" />
        <Heading color="accent-3" size="large">
          hey!
        </Heading>
        <Heading color="white" size="small" textAlign="center">
          you're trying to use mlAcademy on a device that's too small!
        </Heading>
        <Heading color="white" size="small" textAlign="center">
          please check out our app on the App Store
        </Heading>
        <Box direction="row">
          <Icons.Apple size="large" color="white" />
          <Icons.Android size="large" color="white" />
        </Box>
      </Box>
    </Layer>
  );
}

export function NoMatch() {
  return (
    <Box
      style={{ 'background-image': 'linear-gradient(#7D4CDB, #6a45ba, #7D4CDB)' }}
      height="100%"
      justify="center"
      align="center"
    >
      <Heading color="white" size="xlarge">
        404.
      </Heading>
    </Box>
  );
}

export const Header = props => (
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

export const Loading = () => (
  <img src={loading} alt="..." style={{ position: 'absolute', top: '30%', left: '48%' }} />
);
