import React from 'react';
import Helmet from 'react-helmet';
import Router from '../routes/Router';
import Site from './Site';
import Header from '../Header/Header';
import Content from './Content';
import { info } from 'getConstants';

function App(props) {
  const { name, tagline } = info;
  return (
    <Site>
      <Helmet
        title={name}
        meta={[
          {
            name: 'description',
            content: { tagline }
          },
          {
            name: 'keywords',
            content:
              'machine, learning, data, science, computers, computing, computer, science, high, school, game, tutorial'
          }
        ]}
      />
      <Header />
      <Content>
        <Router />
      </Content>
    </Site>
  );
}

App.propTypes = {};

export default App;
