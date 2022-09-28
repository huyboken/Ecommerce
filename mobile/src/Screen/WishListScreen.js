import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../Components/Layout/Header'
import { Colors } from '../Constant'
import WishList from '../Components/WishList/WishList'

const WishListScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <WishList />
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