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
    const name = Firebase.getCurrentUsername();
    setUser(p => ({ ...p, name }));
  });

  const [isAuthenticated, setIsAuthenticated] = useGlobalState('auth');
  const [user, setUser] = useGlobalState('user');

  return (
    <GlobalStateProvider>
      <Notifications />
      <Layout />
    </GlobalStateProvider>
  );
}

export default App;
