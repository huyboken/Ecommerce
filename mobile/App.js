import { Dimensions, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Header from './src/Components/Layout/Header'
import { Colors, Fonts, Images } from './src/Constant'


const App = () => {
  return (
    <View style={{ backgroundColor: Colors.LIGHT_GRAY, flex: 1 }}>
      <Header />
    </View>
  )
}

export default App

const styles = StyleSheet.create({

})