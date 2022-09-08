import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HomeScreen from '../Screen/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const Main = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>
    );
};

export default Main;

const styles = StyleSheet.create({});
