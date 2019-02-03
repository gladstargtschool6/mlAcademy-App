import React from "react";
import LabView from "./LabView/LabView";
import { Box, Heading, Grommet, ResponsiveContext } from "grommet";
import Header from "./Header";

const theme1 = {
  global: {
    colors: {
      brand: "#7D4CDB",
      "accent-1": "#6FFFB0",
      "accent-3": "#90fcf9"
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px"
    }
  }
};

const theme2 = {
  global: {
    colors: {
      brand: "#000000",
      "accent-1": "#6FFFB0",
      "accent-3": "#90fcf9"
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px"
    }
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: theme1
    }
  }

  changeTheme() {
    var newTheme = this.state.theme === theme1 ? theme2 : theme1;
    this.setState({theme: newTheme});
  }

  render() {
    return (
      <Grommet theme={this.state.theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <div>
              <Header>
                <Heading level="3" margin="none">
                  mlAcademy
                </Heading>
              </Header>
              <Box
                height="100%"
                background="bg"
                elevation="none"
                fill="vertical"
                margin="small"
              >
                <LabView classID={8} />
              </Box>
            </div>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;
