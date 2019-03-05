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
        script={[{ src: 'https://use.fontawesome.com/releases/v5.7.2/js/all.js' }]}
        link={[
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Poppins:700'
          },
          {
            rel: 'stylesheet',
            href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css'
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
