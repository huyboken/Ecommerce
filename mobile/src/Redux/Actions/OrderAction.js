import axios from 'axios';
import URI, { CONFIG } from '../URI';

export const createOrder = (order = async dispatch => {
    try {
        dispatch({ type: 'newOrderRequest' });
        const { data } = await axios.post(`${URI}/api/v2/order/new`, order, CONFIG);

        dispatch({
            type: 'newOrderSuccess',
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'newOrderFail',
            payload: error.response.data.message,
        });
    }
});

export const getOrder = () => async dispatch => {
    try {
        dispatch({ type: 'orderDataRequest' });

        const { data } = await axios.get(`${URI}/api/v2/orders/me`);

        dispatch({ type: 'orderDataSuccess', payload: data.orders });
    } catch (error) {
        dispatch({
            type: 'orderDataFail',
            payload: error.response.data.message,
        });
    }
};
