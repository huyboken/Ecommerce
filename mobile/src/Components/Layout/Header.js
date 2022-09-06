import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Display from '../../Utils/Display';
import { Colors } from '../../Constant';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = () => {
    return (
        <View style={styles.headerMain}>
            <View style={styles.headerFlex}>
                <TouchableOpacity >
                    <Ionicons name="menu-outline" size={30} />
                </TouchableOpacity>
                <TextInput
                    placeholderTextColor={"#333"}
                    placeholder={"Search..."}
                    style={styles.searchBox}
                />
                <TouchableOpacity >
                    <Ionicons name="search-outline" size={20} style={styles.searchIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    headerMain: {
        width: Display.width,
        height: Display.width / 4 - 35,
        backgroundColor: Colors.WHITE,
        elevation: 8,
        padding: 10,
        justifyContent: 'center'
    },
    headerFlex: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    searchBox: {
        width: Display.width - 70,
        height: Display.width / 7 - 15,
        backgroundColor: Colors.LIGHT_GREY1,
        marginHorizontal: 10,
        borderRadius: 25,
        fontSize: 15,
        paddingHorizontal: 10,
        position: 'relative'
    },
    searchIcon: {
        right: 45
    }
});
