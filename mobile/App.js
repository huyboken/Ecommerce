import React, { useEffect, useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import Store from './src/Redux/Store';
import { NavigationContainer } from '@react-navigation/native';
import Main from './src/Navigations/Main';
import Auth from './src/Navigations/Auth';
import { loadUser } from './src/Redux/Actions/UserAction';
import { Dimensions, LogBox, Text, View } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import LottieView from 'lottie-react-native';
import { Images } from './src/Constant';
import Splash from './src/Components/Layout/Splash';

LogBox.ignoreAllLogs();

const height = Dimensions.get('window').height;
const { width } = Dimensions.get('window');

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

  console.log(loading)

  useEffect(() => {
    Store.dispatch(loadUser());

    // Network connection check
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
  }, [netInfo]);

  return (
    <>
      {!notConnected ? (
        <>
          <NavigationContainer>
            <>
              {loading ? (
                <Splash />
              ) : (
                <>{isAuthenticated ? <Main /> : <Auth />}</>
              )}
            </>
          </NavigationContainer>
        </>
      ) : (
        <NetworkError />
      )}
    </>
  );
};

export default App;

const NetworkError = () => {
  return (
    <View
      style={{
        height: height * 1,
        width: width * 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <LottieView
        source={Images.NETWORK}
        speed={0.5}
        autoPlay
        loop={true}
        style={{
          width: width * 1,
          height: height / 2.5,
        }}
      />
      <Text
        style={{
          color: 'crimson',
          fontSize: 16,
          fontWeight: '600',
        }}>
        Please check your internet connection 😣
      </Text>
    </View>
  );
};