import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Display from '../../Utils/Display';
import { Colors } from '../../Constant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../Redux/Actions/UserAction';

const Login = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const { loading, isAuthenticated, error } = useSelector((state) => state.user)

    const loginSubmit = () => {
        dispatch(loginUser(loginEmail, loginPassword));
    };
    const openForgot = () => { };
    const onpenSignUp = () => {
        navigation.navigate('SignUp');
    };

    useEffect(() => {
        if (error) {
            alert(error)
        }
        if (isAuthenticated) {
            alert("Login!")
        }

    }, [loading, isAuthenticated, error, alert])

    return (
        <View style={styles.container}>
            <View style={styles.loginHeader}>
                <Text style={styles.textHeader}>Welcome</Text>
                <Text style={styles.textHeader1}>Sign in to continue!</Text>
            </View>
            <View style={styles.loginBox}>
                <View style={styles.relative}>
                    <Ionicons name="mail-open-outline" size={25} style={styles.icon} />
                    <TextInput
                        placeholder="Write your email..."
                        placeholderTextColor={Colors.BLACK}
                        style={styles.inputBox}
                        textContentType={'emailAddress'}
                        keyboardType={'email-address'}
                        value={loginEmail}
                        onChangeText={setLoginEmail}
                    />
                </View>
                <View style={styles.relative}>
                    <Ionicons name="lock-closed-outline" size={25} style={styles.icon} />
                    <TextInput
                        placeholder="Write your password..."
                        placeholderTextColor={Colors.BLACK}
                        style={styles.inputBox}
                        textContentType={'password'}
                        secureTextEntry={true}
                        value={loginPassword}
                        onChangeText={setLoginPassword}
                    />
                    <Text onPress={openForgot} style={styles.textForgot}>
                        Forgot password?
                    </Text>
                    <TouchableOpacity onPress={loginSubmit} style={styles.buttonLogin}>
                        <Text style={styles.textLogin}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={styles.textFooter}>Not have any account? </Text>
                <TouchableOpacity onPress={onpenSignUp}>
                    <Text style={styles.textSignUp}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        width: Display.width * 1 - 20,
        padding: 20,
        // backgroundColor: "#e5e5e5",
        // height: Display.width * 2,
    },
    loginHeader: {
        width: Display.width * 1,
        paddingLeft: 10,
        paddingTop: Display.width / 5,
    },
    textHeader: {
        fontSize: 30,
        fontFamily: 'Roboto',
        fontWeight: '700',
        color: Colors.BLACK,
    },
    textHeader1: {
        fontSize: 20,
        // fontFamily: "Roboto",
        fontWeight: '500',
        color: Colors.GRAY,
    },
    inputBox: {
        width: Display.width * 1 - 50,
        borderRadius: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#FB578E',
        fontSize: 15,
        paddingLeft: 45,
        marginVertical: 10,
    },
    icon: {
        position: 'absolute',
        top: 16,
        left: 10,
        color: '#FB578E',
        zIndex: 10,
    },
    relative: {
        position: 'relative',
    },
    loginBox: {
        marginTop: Display.width / 4,
    },
    textForgot: {
        textAlign: 'right',
        fontSize: 15,
        color: Colors.BLACK,
    },
    buttonLogin: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        // backgroundColor: '#3BB77E',
        backgroundColor: '#FB578E',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    textLogin: {
        fontSize: 18,
        color: Colors.WHITE,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingTop: Display.width / 6 - 20,
    },
    textFooter: {
        color: Colors.BLACK,
        fontSize: 15,
    },
    textSignUp: {
        fontSize: 15,
        color: '#FB578E',
        paddingRight: 15,
    },
});
