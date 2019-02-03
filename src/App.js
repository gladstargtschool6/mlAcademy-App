import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import LabView from "./LabView";
import { FormClose, Notification } from "grommet-icons";
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
  ResponsiveContext
} from "grommet";
import * as Themes from "grommet/themes";

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
      bg: "#03DAC6"
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px"
    }
  }
};

const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="accent-4"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

class App extends React.Component {
  state = {
    showSidebar: false
  };
  render() {
    const { showSidebar } = this.state;
    return (
      <Grommet theme={Themes.grommet} full>
        <ResponsiveContext.Consumer>
          {size => (
            <div>
              <AppBar>
                <Heading level="3" margin="none">
                  mlAcademy
                </Heading>
              </AppBar>
              <Box
                elevation="none"
                fill="vertical"
                margin="small"
                background="bg"
              >
                {/* CODE EDITOR */}
                <LabView />
              </Box>
            </div>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;
