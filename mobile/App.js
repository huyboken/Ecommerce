import React, { useEffect, useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import Store from './src/Redux/Store';
import { NavigationContainer } from '@react-navigation/native';
import Main from './src/Navigations/Main';
import Auth from './src/Navigations/Auth';
import { loadUser } from './src/Redux/Actions/UserAction';
import { ActivityIndicator } from 'react-native';

const App = () => {
  return (
    <Provider store={Store}>
      <AppStack />
    </Provider>
  );
};

const AppStack = () => {
  const { isAuthenticated, user, loading } = useSelector(state => state.user);

  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

  return (
    <NavigationContainer>
      {loading ? (
        <ActivityIndicator
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          color={'black'}
          size={'large'}
        />
      ) : (
        <>{isAuthenticated ? <Main /> : <Auth />}</>
      )}
    </NavigationContainer>
  );
};

export default App;
