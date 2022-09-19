import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../Constant'
import Header from '../Components/Layout/Header'

const OrderScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
        </SafeAreaView>
    )
}

export default OrderScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE
    }
})