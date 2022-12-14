import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import { register } from '../../Redux/Actions/UserAction';
import { useDispatch, useSelector } from 'react-redux';
import Display from '../../Utils/Display';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
    const { error, loading, isAuthenticated } = useSelector(state => state.user);
    const navigation = useNavigation()
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState('https://mern-nest-ecommerce.herokuapp.com/profile.png');

    console.log(name, email, password, avatar);

    const uploadImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            compressImageQuality: 0.8,
            includeBase64: true,
        }).then(image => {
            setAvatar('data:image/jpeg;base64,' + image.data);
        });
    };

    const registerUser = () => {
        dispatch(register(name, email, password, avatar));
        alert('Register Successfully')
    };

    useEffect(() => {
        if (error) {
            alert(error)
            dispatch({ type: 'clearErrors' });
        }
    }, [dispatch, error, isAuthenticated]);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name='arrow-back' size={30} color="black" />
            </TouchableOpacity>
            <View style={styles.LoginHeader}>
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: '700',
                        fontFamily: 'Roboto',
                        color: '#333',
                    }}>
                    Welcome,
                </Text>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: '500',
                        color: '#555',
                    }}>
                    Crate an account to continue!
                </Text>
            </View>
            <View style={styles.LoginBox}>
                <View style={styles.relative}>
                    <Icon name="person-circle-outline" size={25} style={styles.icon} />
                    <TextInput
                        placeholder="Write your name..."
                        placeholderTextColor="#333"
                        style={styles.inputBox}
                        value={name}
                        onChangeText={text => setName(text)}
                        textContentType="name"
                    />
                </View>
                <View style={styles.relative}>
                    <Icon name="mail-open-outline" size={25} style={styles.icon} />
                    <TextInput
                        placeholder="Write your email..."
                        placeholderTextColor="#333"
                        style={styles.inputBox}
                        value={email}
                        onChangeText={text => setEmail(text)}
                        textContentType="emailAddress"
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.relative}>
                    <Icon name="lock-closed-outline" size={25} style={styles.icon} />
                    <TextInput
                        placeholder="Write your password..."
                        placeholderTextColor="#333"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={styles.inputBox}
                        textContentType="password"
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.relative}>
                    <View
                        style={{
                            marginTop: 10,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <Image
                            source={{
                                uri:
                                    avatar === ''
                                        ? 'https://mern-ecommerce-stores.herokuapp.com/profile.png'
                                        : avatar,
                            }}
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: 80,
                                resizeMode: 'contain',
                                borderWidth: 1,
                                borderColor: '#999',
                            }}
                        />
                        <TouchableOpacity onPress={uploadImage}>
                            <View
                                style={{
                                    marginLeft: 10,
                                    height: 50,
                                    width: Display.width * 1 - 100,
                                    backgroundColor: '#f5f5f5',
                                    textAlign: 'center',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 10,
                                }}>
                                <Text
                                    style={{
                                        color: '#333',
                                        fontSize: 18,
                                    }}>
                                    Choose Photo
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={registerUser}>
                        <View style={styles.Button}>
                            <Text style={{ color: '#fff', fontSize: 18 }}>Sign Up</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingTop: Display.width / 6 - 20,
                    justifyContent: 'flex-end',
                }}>
                <Text
                    style={{
                        color: '#333',
                        fontSize: 15,
                    }}>
                    Already have a account ?
                </Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text
                        style={{
                            fontSize: 15,
                            color: '#FB578E',
                            paddingRight: 15,
                        }}>
                        {' '}
                        Sign In
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: Display.width * 1,
        padding: 20,
        backgroundColor: '#e5e5e5',
        height: Display.width * 2,
    },
    LoginHeader: {
        width: Display.width * 1,
        paddingTop: Display.width / 5,
        paddingLeft: 10,
    },
    inputBox: {
        width: Display.width * 1 - 50,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#3BB77E',
        paddingLeft: 45,
        fontSize: 15,
        color: '#333',
        marginVertical: 10,
        height: 50
    },
    relative: {
        position: 'relative',
    },
    icon: {
        position: 'absolute',
        top: 20,
        left: 10,
        zIndex: 10,
        color: '#FB578E',
    },
    LoginBox: {
        marginTop: Display.width / 4,
    },
    Button: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#3BB77E',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
});