import { Platform, SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import { Colors, Images, Xml } from '../../Constant'
import { SvgXml } from 'react-native-svg'
import Display from '../../Utils/Display'
import LottieView from 'lottie-react-native';

const Splash = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <SvgXml xml={Xml.logoXml} style={styles.image} />
            </View>
            <LottieView
                source={Images.LOADER}
                autoPlay
                loop
                style={styles.loader}
                resizeMode={'contain'}
            />
        </SafeAreaView>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Display.height * 1,
        backgroundColor: Colors.WHITE,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        // width: Display.width * 1 - 150,
        // height: 200,
        marginBottom: 20
    },
    loader: {
        position: 'absolute',
        width: Platform.isPad ? 300 : 200,
        bottom: 20
    }
})