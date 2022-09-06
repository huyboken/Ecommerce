import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Swiper from 'react-native-swiper';
import { Colors, Images } from '../../Constant';
import Display from '../../Utils/Display';

const Banner = () => {
    const [bannerData, setBannerData] = useState([]);

    useEffect(() => {
        setBannerData([Images.BANNER1, Images.BANNER2, Images.BANNER3]);
        return () => {
            setBannerData([]);
        };
    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.swiper}>
                    <Swiper
                        autoplay={true}
                        showsButtons={false}
                        autoplayTimeout={4}
                        style={{ height: Display.width / 2 }}>
                        {bannerData.map(item => {
                            return (
                                <Image
                                    source={item}
                                    key={item}
                                    style={styles.banner}
                                    resizeMode="cover"
                                />
                            );
                        })}
                    </Swiper>
                    <View style={{ height: 20 }} />
                </View>
            </View>
        </ScrollView>
    );
};

export default Banner;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.LIGHT_GREY1,
    },
    swiper: {
        width: Display.width,
        marginTop: '5%',
        alignItems: 'center',
    },
    banner: {
        height: Display.width / 2,
        width: Display.width - 40,
        borderRadius: 10,
        marginHorizontal: 20,
    },
});
