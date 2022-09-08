import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Images } from '../Constant';
import Display from '../Utils/Display';
import {
    CartScreen,
    HomeScreen,
    ProductsScreen,
    ProfileScreen,
    WishListScreen,
} from '../Screen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
            }}
            initialRouteName="Home">
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={({ route }) => ({
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: Display.width / 5,
                            }}>
                            <Image
                                source={Images.HOME}
                                style={{
                                    width: 25,
                                    height: 25,
                                    marginTop: 5,
                                    resizeMode: 'contain',
                                    tintColor: focused ? 'crimson' : 'black',
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? 'crimson' : 'black',
                                    textAlign: 'center',
                                }}>
                                Home
                            </Text>
                        </View>
                    ),
                })}
            />
            <Tab.Screen
                name="Products"
                component={ProductsScreen}
                options={({ route }) => ({
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: Display.width / 5,
                            }}>
                            <Image
                                source={Images.SHOP}
                                style={{
                                    width: 25,
                                    height: 25,
                                    marginTop: 5,
                                    resizeMode: 'contain',
                                    tintColor: focused ? 'crimson' : 'black',
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? 'crimson' : 'black',
                                    textAlign: 'center',
                                }}>
                                Products
                            </Text>
                        </View>
                    ),
                })}
            />
            <Tab.Screen
                name="WishList"
                component={WishListScreen}
                options={({ route }) => ({
                    tabBarBadge: 9,
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: Display.width / 5,
                            }}>
                            <Image
                                source={Images.HEART}
                                style={{
                                    width: 25,
                                    height: 25,
                                    marginTop: 5,
                                    resizeMode: 'contain',
                                    tintColor: focused ? 'crimson' : 'black',
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? 'crimson' : 'black',
                                    textAlign: 'center',
                                }}>
                                WishList
                            </Text>
                        </View>
                    ),
                })}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={({ route }) => ({
                    tabBarBadge: 1,
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: Display.width / 5,
                            }}>
                            <Image
                                source={Images.CART}
                                style={{
                                    width: 25,
                                    height: 25,
                                    marginTop: 5,
                                    resizeMode: 'contain',
                                    tintColor: focused ? 'crimson' : 'black',
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? 'crimson' : 'black',
                                    textAlign: 'center',
                                }}>
                                Cart
                            </Text>
                        </View>
                    ),
                })}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={({ route }) => ({
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: Display.width / 5,
                            }}>
                            <Image
                                source={Images.USER}
                                style={{
                                    width: 45,
                                    height: 45,
                                    marginTop: 5,
                                    borderRadius: 100,
                                }}
                            />
                        </View>
                    ),
                })}
            />
        </Tab.Navigator>
    );
};

export default BottomTab;

const styles = StyleSheet.create({
    // container: {
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     width: Display.width / 5
    // },
    // icon: {
    // },
    // text: {
    // }
});
