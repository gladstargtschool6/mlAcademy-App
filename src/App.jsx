import React from 'react';
import { Box, Button, Grommet, ResponsiveContext } from 'grommet';
import { Route, withRouter } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';
import logoTextWhite from './img/logo_text_white.svg';
import Home from './Home';
import Lab from './Lab';
import { Config, theme1, theme2 } from './Config';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isAuthenticated: false,
      theme: theme1,
      topicID: 0,
      lessonID: 0,
      classes: [],
      height: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ height: window.innerHeight });
  }

  changeTheme() {
    this.setState(prevState => ({ theme: prevState.theme === theme1 ? theme2 : theme1 }));
  }

  goTo(route) {
    this.props.history.push(route);
  }

  handlePrev() {
    this.setState(prevState => ({ lessonID: prevState.lessonID - 1 }));
  }

  handleNext() {
    this.setState(prevState => ({ lessonID: prevState.lessonID + 1 }));
  }

  render() {
    const { height } = this.state;
    return (
      <Grommet theme={this.state.theme} full>
        <Header>
          <img
            src={logoTextWhite}
            alt="Logo"
            height="40pt"
            onClick={() => {
              this.goTo('/');
            }}
          />
          <Box direction="row" gap="small">
            <Button
              color="accent-4"
              label="Home"
              onClick={() => {
                this.goTo('/');
              }}
              primary
            />
            <Button
              color="accent-4"
              label="Labs"
              onClick={() => {
                this.goTo('/labs');
              }}
              primary
            />
            {!this.state.isAuthenticated && (
              <Button
                color="accent-4"
                label="Login"
                onClick={() => {
                  this.goTo('/login');
                }}
              />
            )}
          </Box>
        </Header>
        <div style={{ height: `${height - 60}px` }}>
          <Route exact path="/" component={Home} />
          <Route path="/labs" render={() => <Lab topicID={8} height={height} />} />
          <Route path="/login" component={Login} />
        </div>
      </Grommet>
    );
  }
}

const Small = () => <Home />;

const Login = () => <div />;

export default withRouter(App);
