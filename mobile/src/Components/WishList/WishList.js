import {
    Image,
    StyleSheet,
    Text,
    ToastAndroid,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { addCart } from '../../Redux/Actions/ProductAction';
import Display from '../../Utils/Display';
import { Colors } from '../../Constant';

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
            alert(
                productId === itemId
                    ? `${productName} already have in cart`
                    : `${productName} out of stock`,
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
            alert(`${productName} added to cart`);
        }
    };

    useEffect(() => {
        cartData?.map(item => {
            setItemId(item.productId);
        });
    }, [dispatch, cartData]);

    return (
        <>
            {wishlistData?.length > 0 ? (
                <View>
                    {wishlistData.map((product, index) => (
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: Display.width * 0.05,
                            }}
                            key={index}>
                            <Image
                                style={{ width: 60, height: 60 }}
                                source={{ uri: product.productImage }}
                            />
                            <View
                                style={{
                                    justifyContent: 'flex-start',
                                    flexDirection: 'column',
                                    width: Display.width / 3.3,
                                }}>
                                <Text style={styles.productName}>{product.productName}</Text>
                            </View>
                            <View>
                                <Text style={styles.productPrice}>
                                    $ {product.productPrice}
                                </Text>
                            </View>
                            <TouchableOpacity
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#000',
                                    marginLeft: Display.width * 0.04,
                                    borderRadius: 5,
                                    marginRight: Display.width * 0.05,
                                    padding: 5
                                }}
                                onPress={() =>
                                    addToCartHandler(
                                        product.productName,
                                        product.productImage,
                                        product.productPrice,
                                        user._id,
                                        product._id,
                                        product.Stock,
                                    )
                                }>
                                <Text style={{ color: '#fff', fontSize: 16 }}>Add to Cart</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            ) : (
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <Text
                        style={{ color: Colors.BLACK, textAlign: 'center', fontSize: 20 }}>
                        Your wishList is empty 😢
                    </Text>
                </View>
            )}
        </>
    );
};

export default WishList;

const styles = StyleSheet.create({
    productName: {
        color: Colors.BLACK,
        fontSize: 20,
        paddingHorizontal: 5,
        marginBottom: 5,
    },
    productPrice: {
        color: Colors.BLACK,
        fontSize: 22,
        fontWeight: '700',
    },
});
