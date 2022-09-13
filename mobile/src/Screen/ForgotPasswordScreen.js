import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import ForgotPassword from '../Components/Authentication/ForgotPassword'

const ForgotPasswordScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ForgotPassword />
        </SafeAreaView>
    )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})