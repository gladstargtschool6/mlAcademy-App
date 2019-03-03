import React from 'react';
import Layout from './app/Layout';
import Notifications from 'react-notify-toast';
import { GlobalStateProvider } from './state';

function App() {
  return (
    <GlobalStateProvider>
      <Notifications />
      <Layout />
    </GlobalStateProvider>
  );
}

export default App;
