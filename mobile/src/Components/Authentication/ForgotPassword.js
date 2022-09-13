import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Display from '../../Utils/Display'
import { Colors, Fonts } from '../../Constant'
import { useDispatch, useSelector } from 'react-redux'
import { forgotPassword } from '../../Redux/Actions/UserAction'

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const dispatch = useDispatch()
    const { message, error } = useSelector(state => state.forgotPassword);

    const submit = () => {
        dispatch(forgotPassword(email))
    }

    useEffect(() => {
        if (error) {
            alert(error)
        }
        if (message) {
            alert(message)
        }
    }, [alert, message, error])

    return (
        <>
            <TextInput
                placeholder='Write your email...'
                placeholderTextColor={Colors.BLACK}
                style={styles.forgot}
                value={email}
                onChangeText={setEmail}
            />
            <TouchableOpacity onPress={submit} style={styles.button}>
                <Text style={styles.text}>Submit</Text>
            </TouchableOpacity>
        </>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    forgot: {
        width: Display.width * 1 - 80,
        borderColor: "#FB578E",
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 20,
        color: Colors.BLACK,
    },
    button: {
        width: Display.width * 1 - 80,
        height: 50,
        borderRadius: 10,
        backgroundColor: "#FB578E",
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        color: Colors.WHITE,
    }
})