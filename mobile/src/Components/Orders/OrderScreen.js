import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../Layout/Header';
import URI from "../../Redux/URI";
import { StripeProvider } from '@stripe/stripe-react-native';
import axios from 'axios';
import Order from './order';

export default function OrderScreen() {
    const [publishableKey, setpublisheableKey] = useState("");
    async function getStripeApiKey() {
        const { data } = await axios.get(`${URI}/api/v2/stripeapikey`);
        setpublisheableKey(data.stripeApiKey);
    }
    useEffect(() => {
        getStripeApiKey();
    }, [])


    return (
        <StripeProvider publishableKey={publishableKey}>
            <Header />
            <Order />
        </StripeProvider>
    );
}