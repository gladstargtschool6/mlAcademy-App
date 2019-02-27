import React, { useEffect } from 'react';
import Layout from './app/Layout';
import Notifications from 'react-notify-toast';
import { useGlobalState, GlobalStateProvider } from './state';
import Firebase from './auth/firebase';

function App(props) {
  useEffect(() => {
    Firebase.isInitialized().then(val => {
      setIsAuthenticated(val);
    });
    setName(Firebase.getCurrentUsername());
  });

  const [isAuthenticated, setIsAuthenticated] = useGlobalState('auth');
  const [name, setName] = useGlobalState('name');

  return (
    <GlobalStateProvider>
      <Notifications />
      <Layout />
    </GlobalStateProvider>
  );
}

export default App;
