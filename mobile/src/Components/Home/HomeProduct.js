import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Display from '../../Utils/Display'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../Redux/Actions/ProductAction'
import ProductCard from './ProductCard'
import { Colors } from '../../Constant'

const HomeProduct = () => {
    const dispatch = useDispatch();

    const { products, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        if (error) {
            alert(error);
        }
        dispatch(getProduct())
    }, [dispatch, error])

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Best Selling</Text>
            {loading ? <ActivityIndicator color={Colors.BLACK} /> :
                <>
                    {products && products.map((item) => {
                        return (
                            <ProductCard key={item._id} products={item} />
                        )
                    })}
                </>
            }
        </View>
    )
}

export default HomeProduct

const styles = StyleSheet.create({
    container: {
        width: Display.width,
        padding: 10,
        marginVertical: 10
    },
    titleText: {
        fontSize: 20,
        color: "#333",
        textAlign: 'center'
    }
})