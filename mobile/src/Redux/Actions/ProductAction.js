import axios from 'axios';
import URI from '../URI';

export const getProduct =
    (keyword = '') =>
        async dispatch => {
            try {
                dispatch({ type: 'allProductRequest' });
                const { data } = await axios.get(
                    `${URI}/api/v2/products?keyword=${keyword}`,
                );

                dispatch({ type: 'allProductSuccess', payload: data });
            } catch (error) {
                dispatch({ type: 'allProductFail', payload: error.response.data.message });
            }
        };
