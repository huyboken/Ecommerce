import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, SignUp, SignUpScreen } from '../Screen';
import Splash from '../Components/Layout/Splash';
import ForgotPasswordScreen from '../Screen/ForgotPasswordScreen';

const Stack = createNativeStackNavigator();

const Auth = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={'Login'}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        </Stack.Navigator>
    );
};

export default Auth;