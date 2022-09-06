import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductCard = ({ products }) => {
    return (
        <View>
            <Text>{products.name}</Text>
        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({})