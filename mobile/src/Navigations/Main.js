import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTab from './BottomTab';
import {
    CartScreen,
    ProductsScreen,
    ProfileScreen,
    WishListScreen,
} from '../Screen';
import DrawerItems from '../Components/Layout/DrawerItems';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../Constant';

const Drawer = createDrawerNavigator();

const Main = () => {
    return (
        <Drawer.Navigator
            initialRouteName="BottomTab"
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: Colors.LIGHT_GREEN,
                drawerActiveTintColor: Colors.WHITE,
                drawerLabelStyle: {
                    marginLeft: -25,
                    fontSize: 15,
                    marginVertical: 2,
                },
                drawerType: 'front'
            }}
            drawerContent={props => <DrawerItems {...props} />}>
            <Drawer.Screen
                name="Home"
                component={BottomTab}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="home-outline" size={25} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Products"
                component={ProductsScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="storefront-outline"
                            size={25}
                            color={color}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="WishList"
                component={WishListScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="heart-outline" size={25} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="cart-outline" size={25} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="person-circle-outline" size={25} color={color} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
};

export default Main;

const styles = StyleSheet.create({});
