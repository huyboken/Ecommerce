import { Image, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors, Images } from '../../Constant';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { LogOutUser } from '../../Redux/Actions/UserAction';

const DrawerItems = props => {
    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(LogOutUser())
    };
    return (
        <SafeAreaView style={styles.container}>
            <Image source={{ uri: user.avatar?.url }} style={styles.avatar} />
            <Text style={styles.name}>{user.name}</Text>
            <DrawerContentScrollView {...props}>
                <View style={{ paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View>
                <TouchableOpacity style={styles.logout} onPress={logout}>
                    <Ionicons name="log-out-outline" style={styles.logoutIcon} />
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default DrawerItems;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        margin: 0,
    },
    avatar: {
        height: Platform.isPad ? 100 : 60,
        width: Platform.isPad ? 100 : 60,
        borderRadius: 120,
        marginLeft: 10,
        borderWidth: 1,
        borderColor: '#FB578E',
        marginVertical: 10
    },
    name: {
        fontSize: 16,
        paddingLeft: 10,
        color: Colors.BLACK,
    },
    logout: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginLeft: 20,
    },
    logoutIcon: {
        fontSize: 30,
        color: Colors.BLACK,
    },
    logoutText: {
        paddingLeft: 10,
        fontSize: 16,
        color: Colors.BLACK,
    },
});
