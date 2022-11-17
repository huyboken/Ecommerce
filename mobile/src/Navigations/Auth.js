import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen, SignUpScreen, ForgotPasswordScreen } from '../Screen';
import Splash from '../Components/Layout/Splash';

const Auth = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}
            initialRouteName="Login"
        >
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Signup' component={SignUpScreen} />
            <Stack.Screen name='Splash' component={Splash} />
            <Stack.Screen name='Forgot' component={ForgotPasswordScreen} />

        </Stack.Navigator>
    )
}

export default Auth