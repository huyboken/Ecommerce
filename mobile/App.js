import React, { useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import Store from './src/Redux/Store';
import { NavigationContainer } from '@react-navigation/native';
import Main from './src/Navigations/Main';
import Auth from './src/Navigations/Auth';
import { loadUser } from './src/Redux/Actions/UserAction';
import Splash from './src/Components/Layout/Splash';

const App = () => {
  return (
    <Provider store={Store}>
      <AppStack />
    </Provider>
  );
};

const AppStack = () => {
  const { isAuthenticated, loading } = useSelector(state => state.user);

  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

  return (
    <NavigationContainer>
      {loading ? (
        <>
          <Splash />
        </>
      ) : (
        <>{isAuthenticated ? <Main /> : <Auth />}</>
      )}
    </NavigationContainer>
  );
};

export default App;
