import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Display from '../../Utils/Display'
import ProductCard from './ProductCard'
import { Colors } from '../../Constant'
import Loader from '../Layout/Loader'

const HomeProduct = ({ loading, products }) => {
    console.log(loading)
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Best Selling</Text>
            {loading ? <Loader /> :
                <View style={styles.productCard}>
                    {products && products.map((item) => {
                        return (
                            <ProductCard key={item._id} product={item} />
                        )
                    })}
                </View>
            }
            {loading ? <Loader /> :
                <View style={styles.productCard}>
                    {products && products.map((item) => {
                        return (
                            <ProductCard key={item._id} product={item} />
                        )
                    })}
                </View>
            }
        </View>
    )
}

export default HomeProduct

const styles = StyleSheet.create({
    container: {
        width: Display.width,
        padding: 10,
        marginVertical: 10,
        marginBottom: Display.width / 6 - 5
    },
    titleText: {
        fontSize: 20,
        color: "#333",
        textAlign: 'center'
    },
    productCard: {
        width: Display.width * 1 - 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    }
})