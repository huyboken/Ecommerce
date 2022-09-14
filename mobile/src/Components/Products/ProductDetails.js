import {
    Image,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Display from '../../Utils/Display';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../Constant';
import Swiper from 'react-native-swiper';

const ProductDetails = () => {
    const { params } = useRoute();
    const navigation = useNavigation();

    const [click, setClick] = useState(false);

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.productDetailsTop}>
                    <TouchableOpacity onPress={goBack}>
                        <Ionicon name="arrow-back" size={30} color={Colors.BLACK} />
                    </TouchableOpacity>
                    {click ? (
                        <Ionicon
                            name="heart"
                            size={30}
                            style={{
                                marginRight: 10,
                                color: 'crimson',
                                position: 'absolute',
                                bottom: 5,
                                right: 0,
                            }}
                            onPress={() => setClick(!click)}
                        />
                    ) : (
                        <Ionicon
                            name="heart-outline"
                            size={30}
                            style={{
                                marginRight: 10,
                                color: '#333',
                                position: 'absolute',
                                bottom: 5,
                                right: 0,
                            }}
                            onPress={() => setClick(!click)}
                        />
                    )}
                </View>
                <View style={styles.swiper}>
                    <Swiper
                        showsButtons={params.images.length === 1 ? false : true}
                        autoplay
                        autoplayTimeout={4}>
                        {params.images.map(item => (
                            <Image
                                style={styles.banner}
                                source={{ uri: item.url }}
                                key={item._id}
                            />
                        ))}
                    </Swiper>
                </View>
                <View style={styles.details_box}>
                    <View style={styles.details}>
                        <Text
                            style={{ color: Colors.BLACK, fontSize: 20, fontWeight: '600' }}>
                            {params.name}
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text
                                style={{
                                    color: Colors.GRAY,
                                    fontSize: 15,
                                    textDecorationLine: 'line-through',
                                    marginRight: 10,
                                    marginBottom: 10,
                                    fontWeight: '600',
                                }}>
                                {`${params.offerPrice}` && `$${params.offerPrice}`}
                            </Text>
                            <Text
                                style={{ color: Colors.BLACK, fontSize: 18, fontWeight: '600' }}>
                                ${params.price}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.description}>
                        <Text
                            style={{ color: Colors.BLACK, fontSize: 18, fontWeight: '600' }}>
                            Description
                        </Text>
                        <Text
                            style={{
                                color: Colors.BLACK,
                                fontSize: 15,
                                lineHeight: 20,
                                paddingTop: 10,
                            }}>
                            {params.description}
                        </Text>
                    </View>
                    <View style={styles.quantity}>
                        <View style={styles.quantityBox}>
                            <Text
                                style={{ fontSize: 20, color: Colors.WHITE, fontWeight: '600' }}>
                                -
                            </Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: Colors.BLACK, fontSize: 16 }}>1</Text>
                        </View>
                        <View style={styles.quantityBox}>
                            <Text
                                style={{ fontSize: 20, color: Colors.WHITE, fontWeight: '600' }}>
                                +
                            </Text>
                        </View>
                    </View>
                    <View style={{ width: Display.width * 1 - 30, alignItems: 'center' }}>
                        <View style={styles.button}>
                            <Text
                                style={{ fontSize: 18, color: Colors.WHITE, fontWeight: '600' }}>
                                Add to cart
                            </Text>
                        </View>
                        <View style={styles.review}>
                            <Text
                                style={{ fontSize: 18, color: Colors.BLACK, fontWeight: '600' }}>
                                Reviews
                            </Text>
                            {params.reviews.length === 0 ? (
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        paddingTop: 5,
                                        color: Colors.BLACK,
                                    }}>
                                    No reviews have yet
                                </Text>
                            ) : (
                                <>
                                    {params.reviews.map(item => (
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                paddingVertical: 5,
                                            }}
                                            key={item._id}>
                                            <Text
                                                style={{
                                                    fontSize: 15,
                                                    color: Colors.BLACK,
                                                    fontWeight: '700',
                                                    paddingLeft: 5,
                                                }}>
                                                {item.name}
                                                <Text
                                                    style={{
                                                        fontSize: 15,
                                                        color: '#555',
                                                        fontWeight: '600',
                                                    }}>
                                                    {' '}
                                                    {item.comment}
                                                </Text>
                                            </Text>
                                            <Ionicon
                                                name="star"
                                                color={Colors.GOLDEN_ROD}
                                                size={18}
                                            />
                                            <Text style={{ color: Colors.BLACK }}>({item.rating})</Text>
                                        </View>
                                    ))}
                                </>
                            )}
                        </View>
                    </View>
                    <View
                        style={{
                            marginTop: 10,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <Text
                            style={{
                                fontSize: 18,
                                color: '#555',
                                fontWeight: '600',
                                paddingRight: 10,
                            }}>
                            Your ratings
                        </Text>
                        <Ionicon
                            name="star-outline"
                            color={Colors.GOLDEN_ROD}
                            size={18}
                            style={{ marginHorizontal: 2 }}
                        />
                        <Ionicon
                            name="star-outline"
                            color={Colors.GOLDEN_ROD}
                            size={18}
                            style={{ marginHorizontal: 2 }}
                        />
                        <Ionicon
                            name="star-outline"
                            color={Colors.GOLDEN_ROD}
                            size={18}
                            style={{ marginHorizontal: 2 }}
                        />
                        <Ionicon
                            name="star-outline"
                            color={Colors.GOLDEN_ROD}
                            size={18}
                            style={{ marginHorizontal: 2 }}
                        />
                        <Ionicon
                            name="star-outline"
                            color={Colors.GOLDEN_ROD}
                            size={18}
                            style={{ marginHorizontal: 2 }}
                        />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <TextInput
                            keyboardType="default"
                            placeholder="Add your comment"
                            placeholderTextColor={Colors.GRAY}
                            textAlignVertical={'top'}
                            multiline={true}
                            numberOfLines={10}
                            style={{
                                borderWidth: 1,
                                paddingHorizontal: 10,
                                paddingVertical: 15,
                                minHeight: 100,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 10,
                                borderColor: '#FB578E',
                            }}
                        />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.submitButton}>Submit</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ProductDetails;

const styles = StyleSheet.create({
    container: {
        width: Display.width * 1,
        height: Display.height * 1,
        backgroundColor: Colors.WHITE
    },
    productDetailsTop: {
        width: Display.width * 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: Platform.isPad ? Display.width / 9 - 20 : Display.width / 6 - 20,
        backgroundColor: Colors.WHITE,
        elevation: 8,
        paddingHorizontal: 10,
    },
    banner: {
        width: Display.width * 1,
        height: Platform.isPad ? Display.width / 3 - 20 : Display.width / 2 - 20,
        resizeMode: 'contain',
        marginVertical: 10,
    },
    swiper: {
        width: Display.width * 1,
        height: Platform.isPad ? Display.width / 3 : Display.width / 2,
        backgroundColor: Colors.WHITE,
        position: 'relative',
    },
    details_box: {
        backgroundColor: Colors.LIGHT_GREY1,
        elevation: 8,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginVertical: 20,
        padding: 20,

        shadowColor: Colors.LIGHT_BLACK,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowOffset: { width: 3, height: 3 },
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    description: {
        paddingVertical: 10,
    },
    quantity: {
        flexDirection: 'row',
        marginTop: 10,
    },
    quantityBox: {
        width: 40,
        height: 40,
        backgroundColor: '#FB578E',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginHorizontal: 10,
    },
    button: {
        backgroundColor: '#FB578E',
        marginTop: 20,
        width: '70%',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    review: {
        marginTop: 10,
        width: Display.width * 1 - 20,
        padding: 20,
    },
    submitButton: {
        width: '70%',
        backgroundColor: '#FB578E',
        marginTop: 20,
        borderRadius: 5,
        paddingVertical: 15,
        textAlign: "center",
        color: Colors.WHITE,
        fontSize: 18,
        fontWeight: "600"
    }
});
