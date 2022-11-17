import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../Redux/Actions/OrderAction';
import Header from '../Components/Layout/Header';

var { width } = Dimensions.get('window');

export default function OrderScreen() {
    const { error, orders } = useSelector(state => state.orderData);

    const dispatch = useDispatch();

    useEffect(() => {
        if (error) {
            alert(error)
        }
        dispatch(getOrder());
    }, [dispatch, error]);

    return (
        <View>
            <Header />
            <MyOrder orders={orders} />
        </View>
    );
}

const MyOrder = ({ orders }) => {
    return (
        <SafeAreaView>
            {orders && orders.length > 0 ? (
                orders.map((item, index) => (
                    <>
                        <View
                            key={index}
                            style={{
                                width: width * 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                padding: 10,
                                marginVertical: 10,
                            }}>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ color: '#333' }}>Order Status</Text>
                                <Text
                                    style={{
                                        color:
                                            item.orderStatus === 'Processing' ? 'crimson' : '#3BB77E',
                                    }}>
                                    {item.orderStatus}
                                </Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ color: '#333' }}>Items Qty</Text>
                                <Text style={{ color: '#333' }}>
                                    {item.orderItems.reduce(
                                        (total, item) => total + item.quantity,
                                        0,
                                    )}
                                </Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ color: '#333' }}>Amount</Text>
                                <Text style={{ color: '#333' }}>${item.totalPrice}</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ color: '#333' }}>Order Items</Text>
                                <Text style={{ color: '#333' }}>
                                    {item.orderItems[0].productName}...
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                width: width * 1,
                                height: 1,
                                backgroundColor: '#00000036',
                            }}
                        />
                    </>
                ))
            ) : (
                <View>
                    <Text>Your OrderList is empty!</Text>
                </View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});