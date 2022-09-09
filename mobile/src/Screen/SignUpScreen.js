import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignUp from '../Components/Authentication/SignUp'

const SignUpScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <SignUp />
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({})