import { SafeAreaView, StyleSheet, } from 'react-native'
import React from 'react'
import { Colors } from '../Constant'
import Header from '../Components/Layout/Header'
import FilterProducts from '../Components/Products/FilterProducts'
import { ScrollView } from 'react-native-gesture-handler'

const ProductsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Header />
                <FilterProducts />
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProductsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE
    }
})