import React, { useGlobal } from 'reactn';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Routes from '../Routes/Routes';
import Site from './Site';
import Header from '../Header/Header';
import Content from './Content';
import { info } from '../../assets/constants';
import { withAuthService } from '../../Auth';

const propTypes = {
  authService: PropTypes.object.isRequired,
};
const defaultProps = {};

function App(props) {
  const { name, tagline } = info;
  const { authService } = props;
  const [user, setUser] = useGlobal('user');
  const newUser = authService.getCurrentUser();
  if (user !== newUser) {
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
  }

  return (
    <Site>
      <Helmet
        title={name}
        meta={[
          {
            name: 'description',
            content: { tagline },
          },
          {
            name: 'keywords',
            content:
              'machine, learning, data, science, computers, computing, computer, science, high, school, game, tutorial',
          },
        ]}
      />
      <Header />
      <Content>
        <Routes />
      </Content>
    </Site>
  );
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default withAuthService(App);
