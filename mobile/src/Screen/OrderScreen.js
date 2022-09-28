import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { Colors } from '../Constant';
import Header from '../Components/Layout/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../Redux/Actions/OrderAction';

const OrderScreen = () => {
    const { orders, error } = useSelector(state => state.orderData);
    const dispatch = useDispatch();

    useEffect(() => {
        if (error) {
            alert(error);
        }
        dispatch(getOrder());
    }, [dispatch, error]);

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <MyOrder orders={orders} />
        </SafeAreaView>
    );
};

const MyOrder = ({ orders }) => {
    return (
        <View>
            {orders && orders.length > 0 ? (
                <>
                    {orders.map((item, index) => (
                        <View
                            key={index}
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                padding: 10,
                                marginVertical: 10,
                            }}>
                            <View>
                                <Text style={{ color: Colors.BLACK }}>Order status</Text>
                                <Text
                                    style={{
                                        color:
                                            item.orderStatus === 'Processing'
                                                ? Colors.CRIMSON
                                                : '#3BB77E',
                                    }}>
                                    {item.orderStatus}
                                </Text>
                            </View>
                        </View>
                    ))}
                </>
            ) : (
                <View>
                    <Text>Your orderlist is empty!</Text>
                </View>
            )}
        </View>
    );
};

export default OrderScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
});
