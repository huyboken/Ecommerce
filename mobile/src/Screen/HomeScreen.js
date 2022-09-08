import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors, Images } from '../Constant';
import Display from '../Utils/Display';
import Banner from '../Components/Home/Banner';
import HomeProduct from '../Components/Home/HomeProduct';
import Header from '../Components/Layout/Header';

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Header navigation={navigation} />
                <Banner />
                <HomeProduct />
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
