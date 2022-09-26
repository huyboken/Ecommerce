import { StyleSheet, Text, ToastAndroid, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { addCart } from '../../Redux/Actions/ProductAction';

const WishList = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { wishlistData } = useSelector(state => state.wishList);
    const { cartData } = useSelector(state => state.cart);
    const { user } = useSelector(state => state.user);

    const [itemId, setItemId] = useState('');

    //Add to cart
    const addToCartHandler = async (
        productName,
        productImage,
        productPrice,
        userId,
        productId,
        Stock,
    ) => {
        let quantity = 1;
        if (Stock === 0 || productId === itemId) {
            ToastAndroid.showWithGravity(
                productId === itemId
                    ? `${productName} already have in cart`
                    : `${productName} out of stock`,
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
            );
        } else {
            await dispatch(
                addCart(
                    productName,
                    quantity,
                    productImage,
                    productPrice,
                    userId,
                    productId,
                    Stock,
                ),
            );
            ToastAndroid.showWithGravity(
                `${productName} added to cart`,
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
            );
        }
    };

    useEffect(() => {
        cartData.map(item => {
            setItemId(item.productId);
        });
    }, [dispatch, cartData]);

    return (
        <View>
            {wishlistData.length > 0 ? (
                <View>
                    {wishlistData.map((product, index) => (
                        <View style={{ flex: 1 }}>
                            <Text>abc</Text>
                        </View>
                    ))}
                </View>
            ) : null}
        </View>
    );
};

export default WishList;

const styles = StyleSheet.create({});
