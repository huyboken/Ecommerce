import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import ForgotPassword from '../Components/Authentication/ForgotPassword'

const ForgotPasswordScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <ForgotPassword />
            </ScrollView>
        </SafeAreaView>
    )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e5e5e5',
    },
})