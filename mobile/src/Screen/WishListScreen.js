import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Layout/Header'
import { Colors } from '../Constant'

const WishListScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
        </SafeAreaView>
    )
}

export default WishListScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE
    }
})