import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import Display from '../../Utils/Display'
import { Colors, Images } from '../../Constant'

const Loader = () => {
    return (
        <View style={styles.container}>
            <LottieView
                source={Images.LOADER}
                autoPlay
                loop
                style={styles.loader}
                resizeMode={'contain'}
            />
        </View>
    )
}

export default Loader

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: Display.height * 1,
        backgroundColor: Colors.WHITE,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loader: {
        width: Platform.isPad ? 300 : 200,
    }
})