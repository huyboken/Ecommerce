import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Display from '../../Utils/Display';
import { Colors, Images } from '../../Constant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../Redux/Actions/UserAction';

const SignUp = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { loading, isAuthenticated, error } = useSelector(state => state.user);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState(
        'https://mern-nest-ecommerce.herokuapp.com/profile.png',
    );

    const uploadImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            compressImageQuality: .8,
        }).then(image => {
            setAvatar(image.path);
        });
    };

    console.log(avatar);
    const register = () => {
        dispatch(registerUser(name, email, password, avatar));
    };
    const onpenSignUp = () => {
        navigation.goBack();
    };

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch({ type: "clearErrors" });
        }
        if (isAuthenticated) {
            alert('User create done!');
        }
    }, [isAuthenticated, error, loading, alert]);

    return (
        <View style={styles.container}>
            <View style={styles.loginHeader}>
                <Text style={styles.textHeader}>Welcome</Text>
                <Text style={styles.textHeader1}>Create an account to continue!</Text>
            </View>
            <View style={styles.loginBox}>
                <View style={styles.relative}>
                    <Ionicons
                        name="person-circle-outline"
                        size={25}
                        style={styles.icon}
                    />
                    <TextInput
                        placeholder="Write your name..."
                        placeholderTextColor={Colors.BLACK}
                        style={styles.inputBox}
                        textContentType={'name'}
                        onChangeText={setName}
                    />
                </View>
                <View style={styles.relative}>
                    <Ionicons name="mail-open-outline" size={25} style={styles.icon} />
                    <TextInput
                        placeholder="Write your email..."
                        placeholderTextColor={Colors.BLACK}
                        style={styles.inputBox}
                        textContentType={'emailAddress'}
                        keyboardType={'email-address'}
                        onChangeText={setEmail}
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
                        onChangeText={setPassword}
                    />
                </View>
            </View>
            <View style={styles.relative}>
                <View style={styles.photo}>
                    <Image source={{ uri: avatar }} style={styles.image} />
                    <TouchableOpacity onPress={uploadImage} style={styles.btnPhoto}>
                        <Text style={styles.textPhoto}>Choose Photo</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={register} style={styles.buttonLogin}>
                    <Text style={styles.textLogin}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Text style={styles.textFooter}>Already have a account? </Text>
                <TouchableOpacity onPress={onpenSignUp}>
                    <Text style={styles.textSignUp}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SignUp;

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
    image: {
        width: 40,
        height: 40,
        borderRadius: 80,
        resizeMode: 'stretch',
        borderWidth: 1,
        borderColor: '#999',
    },
    photo: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    btnPhoto: {
        marginLeft: 10,
        height: 50,
        width: Display.width * 1 - 100,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: Colors.SEA_GREEN,
    },
    textPhoto: {
        fontSize: 18,
        color: Colors.WHITE,
    },
});
