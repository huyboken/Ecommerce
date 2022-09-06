import { Dimensions, StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import Header from './src/Components/Layout/Header'
import { Colors, Fonts, Images } from './src/Constant'
import HomeScreen from './src/Screen/HomeScreen'
import { Provider } from 'react-redux'
import Store from './src/Redux/Store'

const App = () => {
  return (
    <Provider store={Store}>
      <SafeAreaView style={styles.container}>
        <Header />
        <HomeScreen />
      </SafeAreaView>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE
  }
})