import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Images } from '../Constant';
import Display from '../Utils/Display';
import {
    CartScreen,
    HomeScreen,
    ProductsScreen,
    ProfileScreen,
    WishListScreen,
} from '../Screen';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Components/Layout/Loader';
import HomeProduct from '../Components/Home/HomeProduct';
import ProductDetails from '../Components/Products/ProductDetails';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { getCart, getWishList } from '../Redux/Actions/ProductAction';
import OrderScreen from '../Screen/OrderScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    const dispatch = useDispatch();
    const { user, loading } = useSelector(state => state.user);
    const { wishlistData, error } = useSelector(state => state.wishList);
    const { cartData } = useSelector(state => state.cart);

    useEffect(() => {
        if (error) {
            alert(error);
        }
        dispatch(getCart());
        dispatch(getWishList());
    }, [dispatch, error]);

    // useEffect(() => {
    //     if (error) {
    //         alert(error);
    //     }
    //     dispatch(getCart());
    //     dispatch(getWishList());
    // }, [dispatch, error, wishlistData]);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Tab.Navigator
                        screenOptions={{
                            headerShown: false,
                            tabBarShowLabel: false,
                            tabBarHideOnKeyboard: true,
                        }}
                        initialRouteName="Home2">
                        <Tab.Screen
                            name="Home2"
                            component={SimpleScreen}
                            options={({ route }) => ({
                                tabBarStyle: { display: Visibility(route) },
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
                                tabBarBadge: wishlistData?.length,
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
                                tabBarBadge: cartData?.length,
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
                                        {user ? (
                                            <Image
                                                source={{ uri: user.avatar?.url }}
                                                style={{
                                                    width: 40,
                                                    height: 40,
                                                    // marginTop: 5,
                                                    borderRadius: 100,
                                                    borderWidth: 1,
                                                    borderColor: '#FB578E',
                                                }}
                                            />
                                        ) : (
                                            <Image
                                                source={Images.USER}
                                                style={{
                                                    width: 40,
                                                    height: 40,
                                                    // marginTop: 5,
                                                    borderRadius: 100,
                                                    borderWidth: 1,
                                                    borderColor: '#FB578E',
                                                }}
                                            />
                                        )}
                                    </View>
                                ),
                            })}
                        />
                    </Tab.Navigator>
                </>
            )}
        </>
    );
};

const SimpleScreen = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            <Stack.Screen name="OrderScreen" component={OrderScreen} />
        </Stack.Navigator>
    );
};

const Visibility = route => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
    if (routeName === 'ProductDetails') return 'none';
    if (routeName === 'OrderScreen') return 'none';
    return 'flex';
};

export default BottomTab;

const styles = StyleSheet.create({});
