import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Colors } from '../../Constant';
import Display from '../../Utils/Display';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { removeCart, updateCart } from '../../Redux/Actions/ProductAction';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
    const { cartData } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);

    const decreaseQuantity = id => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            dispatch(updateCart(id, quantity - 1));
        }
    };

    const increaseQuantity = (id, Stock, name) => {
        if (Stock - 1 < quantity) {
            alert(`${name} out of stock`)
        } else {
            setQuantity(quantity + 1)
            dispatch(updateCart(id, quantity + 1))
        }
    };

    const cartRemoveHandler = (id, name) => {
        alert(`${name} removed from cart`)
        dispatch(removeCart(id))
    }

    const openOrder = () => {
        navigation.navigate("OrderScreen")
    }

    useEffect(() => {
        setTotalPrice(
            cartData.reduce(
                (total, item) => total + item.productPrice * item.quantity,
                0,
            ),
        );
        if (cartData.length > 0) {
            cartData.map(item => {
                setQuantity(item.quantity);
            });
        }
    }, [cartData, quantity]);

    return (
        <>
            {cartData && cartData.length > 0 ? (
                <>
                    {cartData &&
                        cartData.map((items, index) => (
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    padding: Display.width * 0.05,
                                }}
                                key={index}>
                                <Image
                                    source={{ uri: items.productImage }}
                                    style={{ width: 60, height: 60 }}
                                />
                                <View
                                    style={{
                                        flexDirection: 'column',
                                        justifyContent: 'flex-start',
                                        width: Display.width / 1.8,
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 20,
                                            color: Colors.BLACK,
                                            paddingHorizontal: 5,
                                            marginBottom: 5,
                                        }}>
                                        {items.productName}
                                    </Text>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'flex-start',
                                        }}>
                                        <TouchableOpacity
                                            style={[styles.quantityBox, { marginLeft: 5 }]}
                                            onPress={() => decreaseQuantity(items._id)}>
                                            <Text
                                                style={{
                                                    fontSize: 20,
                                                    fontWeight: '800',
                                                    color: Colors.WHITE,
                                                }}>
                                                -
                                            </Text>
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: 20, color: Colors.BLACK }}>
                                            {quantity.toString()}
                                        </Text>
                                        <TouchableOpacity
                                            style={styles.quantityBox}
                                            onPress={() => increaseQuantity(items._id, items.Stock, items.productName)}>
                                            <Text
                                                style={{
                                                    fontSize: 20,
                                                    fontWeight: '800',
                                                    color: Colors.WHITE,
                                                }}>
                                                +
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => cartRemoveHandler(items._id, items.productName)}>
                                            <Ionicons
                                                name="ios-trash"
                                                size={20}
                                                color={Colors.CRIMSON}
                                                style={{ marginHorizontal: 10 }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View>
                                    <Text
                                        style={{
                                            fontSize: 22,
                                            color: Colors.BLACK,
                                            fontWeight: '700',
                                        }}>
                                        $ {items.productPrice * quantity}
                                    </Text>
                                </View>
                            </View>
                        ))}
                    <>
                        <View style={{ backgroundColor: '#999', flex: 1 }}>
                            <View
                                style={{
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    marginVertical: 10,
                                }}>
                                <Text style={{ color: '#333', fontSize: 20, paddingLeft: 15 }}>
                                    Total Price:
                                </Text>
                                <Text
                                    style={{
                                        color: Colors.CRIMSON,
                                        fontSize: 22,
                                        paddingRight: 15,
                                        fontWeight: '700',
                                    }}>
                                    ${totalPrice}
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={openOrder}
                            style={{
                                backgroundColor: '#FB578E',
                                width: Display.width / 2 + 40,
                                height: 50,
                                borderRadius: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignSelf: 'center',
                            }}>
                            <Text
                                style={{ color: Colors.WHITE, fontSize: 18, fontWeight: '700' }}>
                                Go to Checkout
                            </Text>
                        </TouchableOpacity>
                    </>
                </>
            ) : (
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <Text
                        style={{ fontSize: 20, color: Colors.BLACK, textAlign: 'center' }}>
                        Your cart is empty 😢
                    </Text>
                </View>
            )}
        </>
    );
};

export default Cart;

const styles = StyleSheet.create({
    quantityBox: {
        width: 35,
        height: 35,
        backgroundColor: '#FB578E',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
});
