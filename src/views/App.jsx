import React from 'react';
import { Box, Button, Grommet, ResponsiveContext } from 'grommet';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import logoTextWhite from '../img/logo_text_white.svg';
import Home from './Home';
import Lab from './Lab';
import Login from './Login';
import Topics from './Topics';
import NoMatch from './NoMatch';
import { Config, theme1, theme2 } from '../Config';

const propTypes = {
  history: PropTypes.object.isRequired
};
const defaultProps = {};

const LabLoader = ({ height, match: { params } }) => {
  const { id } = params;
  return <Lab height={height} topicID={id} />;
};

LabLoader.propTypes = { height: PropTypes.number.isRequired, match: PropTypes.object.isRequired };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      theme: theme1,
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

  render() {
    const { height } = this.state;
    return (
      <Grommet theme={this.state.theme} full>
        <Header>
          <Link to="/">
            <img src={logoTextWhite} alt="Logo" height="40pt" />
          </Link>

          <Box direction="row" gap="small">
            <Button
              color="accent-4"
              label="home"
              onClick={() => {
                this.goTo('/');
              }}
              primary
            />
            <Button
              color="accent-4"
              label="learn"
              onClick={() => {
                this.goTo('/topics');
              }}
              primary
            />
            {!this.state.isAuthenticated && (
              <Button
                color="accent-4"
                label="login"
                onClick={() => {
                  this.goTo('/login');
                }}
              />
            )}
          </Box>
        </Header>
        <div style={{ height: `${height - 60}px` }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/topics" render={() => <Topics />} />
            <Route
              path="/labs/:id"
              render={props => <LabLoader height={this.state.height} {...props} />}
            />
            <Route path="/login" component={Login} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Grommet>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default withRouter(App);
