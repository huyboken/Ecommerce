import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors, Images } from '../Constant';
import Display from '../Utils/Display';
import Banner from '../Components/Home/Banner';
import HomeProduct from '../Components/Home/HomeProduct';

const HomeScreen = () => {
    return (
        <View>
            <ScrollView>
                <Banner />
                <HomeProduct />
            </ScrollView>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
});
