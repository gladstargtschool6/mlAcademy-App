import React from "react";
import LabView from "./LabView";
import { Box, Button, Grommet, ResponsiveContext } from "grommet";
import Header from "./Header";
import logo_text_white from "./img/logo_text_white.svg";
import { Route, withRouter } from "react-router-dom";

const theme1 = {
  global: {
    colors: {
      brand: "#7D4CDB",
      "accent-1": "#6FFFB0",
      "accent-3": "#81FCED"
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
      "accent-3": "#81FCED"
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
      isAuthenticated: false,
      theme: theme1
    };
  }

  changeTheme() {
    var newTheme = this.state.theme === theme1 ? theme2 : theme1;
    this.setState({ theme: newTheme });
  }

  goTo = route => {
    this.props.history.push(route);
  };

  render() {
    return (
      <Grommet theme={this.state.theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <div>
              <Header>
                <img
                  src={logo_text_white}
                  alt="Logo"
                  height="40pt"
                  onClick={() => {
                    this.goTo("/");
                  }}
                />
                <Box direction="row" gap="small">
                  <Button
                    color="accent-4"
                    label="Home"
                    onClick={() => {
                      this.goTo("/");
                    }}
                    primary
                  />
                  <Button
                    color="accent-4"
                    label="Labs"
                    onClick={() => {
                      this.goTo("/labs");
                    }}
                    primary
                  />
                  {this.state.isAuthenticated ? (
                    <div />
                  ) : (
                    <Button
                      color="accent-4"
                      label="Login"
                      onClick={() => {
                        this.goTo("/login");
                      }}
                    />
                  )}
                </Box>
              </Header>
              <Route exact path="/" component={Home} />
              <Route path="/labs" component={Labs} />
              <Route path="/login" component={Login} />
            </div>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

const Home = () => (
  <Box height="100%" background="accent-1">
    <img src={logo_text_white} alt="LOgo" />
  </Box>
);

const Labs = () => (
  <Box
    height="100%"
    background="bg"
    elevation="none"
    fill="vertical"
    margin="small"
  >
    <LabView classID={8} />
  </Box>
);
const Login = () => <div />;

export default withRouter(App);
