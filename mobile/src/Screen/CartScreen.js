import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../Constant'
import Header from '../Components/Layout/Header'
import Cart from '../Components/Cart/Cart'

const CartScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Cart />
        </SafeAreaView>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE
    }
})