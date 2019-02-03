import React from "react";

import { Box } from "grommet";
import * as Icons from "grommet-icons";

const Header = props => (
  <Box
    align="center"
    background="brand"
    direction="row"
    elevation="medium"
    height="7vh"
    justify="between"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    style={{ zIndex: "1" }}
    tag="header"
    {...props}
  />
);

export default Header;
