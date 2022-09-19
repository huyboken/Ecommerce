import React, { useEffect, useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import Store from './src/Redux/Store';
import { NavigationContainer } from '@react-navigation/native';
import Main from './src/Navigations/Main';
import Auth from './src/Navigations/Auth';
import { loadUser } from './src/Redux/Actions/UserAction';
import Splash from './src/Components/Layout/Splash';
import NetInfo from '@react-native-community/netinfo';
import { LogBox, Text, View } from 'react-native';
import Display from './src/Utils/Display';
import { Colors, Images } from './src/Constant';
import LottieView from 'lottie-react-native';

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <Provider store={Store}>
      <AppStack />
    </Provider>
  );
};

const AppStack = () => {
  const { isAuthenticated, loading } = useSelector(state => state.user);
  const [netInfo, setNetInfo] = useState('');
  const [notConnected, setNotConnected] = useState(false);

  useEffect(() => {
    Store.dispatch(loadUser());

    //Network connect check
    const data = NetInfo.addEventListener(state => {
      setNetInfo(
        `connectionType:${state.type} IsConnected?: ${state.isConnected}`,
      );
      if (state.isConnected === true) {
        setNotConnected(false);
      } else {
        setNotConnected(true);
      }
    });
    return data;
  }, [netInfo, notConnected]);

  return (
    <>
      {!notConnected ? (
        <>
          <NavigationContainer>
            {loading ? (
              <>
                <Splash />
              </>
            ) : (
              <>{isAuthenticated ? <Main /> : <Auth />}</>
            )}
          </NavigationContainer>
        </>
      ) : (
        <NetworkError />
      )}
    </>
  );
};

const NetworkError = () => (
  <View
    style={{
      width: Display.width * 1,
      height: Display.height * 1,
      backgroundColor: Colors.WHITE,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <LottieView
      source={Images.NETWORK}
      speed={0.5}
      loop={true}
      autoPlay
      style={{
        width: Display.width * 1,
        height: Display.height / 2.5,
      }}
    />
    <Text style={{ color: Colors.CRIMSON, fontSize: 16, fontWeight: '600' }}>
      Please check your internet connection 😣
    </Text>
  </View>
);

export default App;
