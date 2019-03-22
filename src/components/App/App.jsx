import React from 'react';
import Helmet from 'react-helmet';
import { useRoutes } from 'hookrouter';
import Site from './Site';
import Header from '../Header/Header';
import Content from './Content';
import { info } from '../../assets/constants';
import NotFound from '../Routes/NotFound';

import Home from '../Home/Home';
import Labs from '../Labs/Labs';
import Login from '../Login/Login';
import Topics from '../Topics/Topics';

const routes = {
  '/': () => <Home />,
  '/topics': () => <Topics />,
  '/labs/:id': ({ id }) => <Labs lessonId={id} />,
  '/login': () => <Login />,
};

function App() {
  const routeResult = useRoutes(routes);
  const { name, tagline } = info;
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
      <Content>{routeResult || <NotFound />}</Content>
    </Site>
  );
}

App.propTypes = {};

export default App;
