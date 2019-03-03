import React from 'react';
import Helmet from 'react-helmet';
import Router from './layout/Router';
import Site from './layout/Site';
import Header from './layout/Header';
import Content from './layout/Content';
import { info } from '../Constants';

function Layout(props) {
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

Layout.propTypes = {};

export default Layout;
