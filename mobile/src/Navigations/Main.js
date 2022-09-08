import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HomeScreen from '../Screen/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTab from './BottomTab';
import Auth from './Auth';
import { CartScreen, ProductsScreen, ProfileScreen, WishListScreen } from '../Screen';

const Drawer = createDrawerNavigator();

const Main = () => {
    return (
        <Drawer.Navigator
            initialRouteName='BottomTab'
            screenOptions={{
                headerShown: false,

            }}
        >
            <Drawer.Screen name="BottomTab" component={BottomTab} />
            <Drawer.Screen name="Products" component={ProductsScreen} />
            <Drawer.Screen name="WishList" component={WishListScreen} />
            <Drawer.Screen name="Cart" component={CartScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
    );
};

export default Main;

const styles = StyleSheet.create({});
