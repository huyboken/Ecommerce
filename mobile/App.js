import React, { useState } from 'react';
import { Provider } from 'react-redux';
import Store from './src/Redux/Store';
import { NavigationContainer } from '@react-navigation/native';
import Main from './src/Navigations/Main';
import Auth from './src/Navigations/Auth';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Provider store={Store}>
      <NavigationContainer>
        {isAuthenticated ? <Main /> : <Auth />}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
