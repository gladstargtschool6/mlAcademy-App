import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { notify } from 'react-notify-toast';
import { GlobalStateProvider } from '../state';

import Firebase from '../auth/firebase';
import Router from './layout/Router';
import Site from './layout/Site';
import Header from './layout/Header';
import Content from './layout/Content';
import { useGlobalState } from '../state';

function Layout(props) {
  return (
    <Site>
      <Helmet
        title="mlAcademy"
        meta={[
          {
            name: 'description',
            content: 'Microsoft mlAcademy - An introduction to machine learning'
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
