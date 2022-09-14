import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../Constant'
import Header from '../Components/Layout/Header'

const CartScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
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