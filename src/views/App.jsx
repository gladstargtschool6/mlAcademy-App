import React from 'react';
import { Box, Button, Grommet, Layer } from 'grommet';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import Notifications, { notify } from 'react-notify-toast';
import PropTypes from 'prop-types';
import { Header, NoMatch, TooSmall } from './components';
import logoTextWhite from '../img/logo_text_white.svg';
import Home from './Home';
import Lab from './Lab';
import Login from './auth/Login';
import Register from './auth/Register';
import Topics from './Topics';
import { theme } from '../Config';
import Firebase from './auth/firebase';

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
      height: 0,
      width: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    Firebase.isInitialized().then(val => {
      this.setState({ isAuthenticated: val });
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ height: window.innerHeight, width: window.innerWidth });
  }

  handleLogout() {
    Firebase.logout();
    this.setState({ isAuthenticated: false });
    notify.show('You have been logged out successfully!', 'warning');
  }

  render() {
    const { height, width, isAuthenticated } = this.state;
    const { history } = this.props;
    const name = Firebase.getCurrentUsername();
    return (
      <Grommet theme={theme} full>
        <Notifications />
        <Header>
          <Link to="/">
            <img src={logoTextWhite} alt="Logo" height="40pt" />
          </Link>

          <Box direction="row" gap="small">
            <Button
              color="accent-4"
              label="home"
              onClick={() => {
                history.replace('/');
              }}
              primary
            />

            {isAuthenticated ? (
              <Button
                color="accent-4"
                label="learn"
                onClick={() => {
                  history.replace('/topics');
                }}
                primary
              />
            ) : (
              <Button
                color="accent-4"
                label="learn"
                onClick={() => {
                  history.replace('/login');
                }}
                primary
              />
            )}
            {isAuthenticated ? (
              <Button
                color="accent-3"
                primary
                label={`Hi ${name}`}
                onClick={() => {
                  this.handleLogout();
                  this.props.history.replace('/');
                }}
              />
            ) : (
              <Button
                color="accent-4"
                label="login"
                onClick={() => {
                  history.replace('/login');
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
            <Route path="/register" component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </div>
        {width < 840 && <TooSmall />}
      </Grommet>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default withRouter(App);
