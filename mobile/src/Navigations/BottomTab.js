import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import ProductsScreen from '../Screen/ProductsScreen'

const Tab = createBottomTabNavigator()

const BottomTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Products' component={ProductsScreen} />
        </Tab.Navigator>
    )
}

export default BottomTab