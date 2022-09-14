import {
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import React, { useState } from 'react';
import Display from '../../Utils/Display';
import { Colors } from '../../Constant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({ product }) => {
    const [click, setClick] = useState();
    const navigation = useNavigation();

    const openProductDetails = item => () => {
        navigation.navigate('ProductDetails', item);
    };

    return (
        <TouchableWithoutFeedback onPress={openProductDetails(product)}>
            <View style={styles.productCard}>
                <Image
                    resizeMode="stretch"
                    source={{ uri: product.images[0].url }}
                    style={styles.image}
                />
                <Text
                    style={{
                        color: Colors.BLACK,
                        paddingVertical: 5,
                        textAlign: 'center',
                    }}>
                    {product.name}
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%',
                            paddingBottom: 10,
                        }}>
                        <Text
                            style={{
                                paddingHorizontal: 10,
                                color: Colors.CRIMSON,
                                fontSize: 16,
                            }}>
                            $ {product.price}
                        </Text>
                        <Text
                            style={{
                                color: Colors.GRAY,
                                fontSize: 12,
                                textDecorationLine: 'line-through',
                                marginLeft: -20,
                                marginTop: -5,
                            }}>
                            {product.offerPrice > 0 && `$ ${product.offerPrice}`}
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <Ionicons name="star" color={Colors.GOLDEN_ROD} size={18} />
                            <Text
                                style={{
                                    color: '#333',
                                    paddingHorizontal: 5,
                                    fontSize: 16,
                                }}>
                                ({product.numOfReviews})
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    {click ? (
                        <TouchableOpacity>
                            <Ionicons
                                onPress={() => setClick(!click)}
                                name="heart"
                                style={{ marginRight: 10, color: Colors.CRIMSON, fontSize: 25 }}
                            />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity>
                            <Ionicons
                                onPress={() => setClick(!click)}
                                name="heart-outline"
                                style={{ marginRight: 10, color: Colors.BLACK, fontSize: 25 }}
                            />
                        </TouchableOpacity>
                    )}
                    {product.Stock !== 0 && (
                        <TouchableOpacity>
                            <Ionicons
                                name="cart-outline"
                                style={{ marginRight: 10, color: Colors.BLACK, fontSize: 25 }}
                            />
                        </TouchableOpacity>
                    )}
                </View>
                {product.Stock === 0 && (
                    <View style={styles.outOfStock}>
                        <Text
                            style={{ fontSize: 11, color: Colors.WHITE, textAlign: 'center' }}>
                            Stock Limited
                        </Text>
                    </View>
                )}
            </View>
        </TouchableWithoutFeedback>
    );
};

export default ProductCard;

const styles = StyleSheet.create({
    productCard: {
        width: Platform.isPad ? Display.width / 4 - 30 : Display.width / 2 - 30,
        // height: Platform.isPad ? Display.width / 3 : Display.width / 1.7,
        height: 'auto',
        borderRadius: 10,
        elevation: 3,
        backgroundColor: Colors.LIGHT_GREY1,
        flexWrap: 'wrap',
        margin: 10,
        paddingBottom: 10,

        shadowColor: Colors.LIGHT_BLACK,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowOffset: { width: 3, height: 3 },
    },
    image: {
        width: '100%',
        height: Platform.isPad ? Display.width / 4 - 60 : Display.width / 2 - 60,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    outOfStock: {
        width: 50,
        height: 50,
        backgroundColor: Colors.CRIMSON,
        position: 'absolute',
        borderRadius: 50,
        top: -10,
        left: -10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
