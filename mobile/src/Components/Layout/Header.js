import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Display } from '../../Utils';
import { Colors } from '../../Constant';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Header = () => {
    return (
        <SafeAreaView style={styles.headerMain}>
            <Ionicons name="menu-outline" size={20} />
        </SafeAreaView>
    );
};

export default Header;

const styles = StyleSheet.create({
    headerMain: {
        width: Display.width,
        height: Display.width / 4 - 30,
        backgroundColor: Colors.WHITE,
        elevation: 8,
    },
});
