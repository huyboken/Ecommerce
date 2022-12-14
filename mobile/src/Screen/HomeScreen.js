import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors, Images } from '../Constant';
import Banner from '../Components/Home/Banner';
import HomeProduct from '../Components/Home/HomeProduct';
import Header from '../Components/Layout/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../Redux/Actions/ProductAction';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector(state => state.products);
    const { wishlistData } = useSelector(state => state.wishList);

    useEffect(() => {
        if (error) {
            alert(error);
        }
        dispatch(getProduct());
    }, [dispatch, error]);

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <Banner />
                <HomeProduct products={products} loading={loading} wishlistData={wishlistData} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
});
