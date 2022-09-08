import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Display from '../../Utils/Display';
import { Colors } from '../../Constant';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({ navigation }) => {
    return (
        <View style={styles.headerMain}>
            <View style={styles.headerFlex}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Ionicons name="menu-outline" size={30} />
                </TouchableOpacity>
                <TextInput
                    placeholderTextColor={"#333"}
                    placeholder={"Search..."}
                    style={styles.searchBox}
                />
                <TouchableOpacity >
                    <Ionicons name="search-outline" style={styles.searchIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    headerMain: {
        width: Display.width,
        height: Platform.isPad ? Display.width / 9 - 35 : Display.width / 4 - 35,
        backgroundColor: Colors.WHITE,
        elevation: 8,
        padding: 10,
        justifyContent: 'center',
        marginVertical: Platform.isPad && 10
    },
    headerFlex: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    searchBox: {
        width: Display.width - 70,
        height: Platform.isPad ? Display.width / 15 - 15 : Display.width / 7 - 15,
        backgroundColor: Colors.LIGHT_GREY1,
        marginHorizontal: 10,
        borderRadius: Platform.isPad ? 30 : 25,
        fontSize: 15,
        paddingHorizontal: 20,
        position: 'relative'
    },
    searchIcon: {
        right: Platform.isPad ? 55 : 45,
        fontSize: 20
    }
});
