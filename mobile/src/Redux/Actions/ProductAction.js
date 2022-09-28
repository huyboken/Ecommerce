import axios from 'axios';
import URI, { CONFIG } from '../URI';

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

//Add to wishlist
export const addToWishList =
    (
        productName,
        quantity,
        productImage,
        productPrice,
        userId,
        productId,
        Stock,
    ) =>
        async dispatch => {
            try {
                dispatch({ type: 'addWishListRequest' });
                const { data } = await axios.post(
                    `${URI}/api/v2/addToWishList`,
                    {
                        productName,
                        quantity,
                        productImage,
                        productPrice,
                        userId,
                        productId,
                        Stock,
                    },
                    CONFIG,
                );
                dispatch({ type: 'addWishListSuccess', payload: data });
            } catch (error) {
                dispatch({ type: 'addWishListFail', payload: error.response.data.message });
            }
        };

//Remove to wishlist
export const removeToWishList = id => async dispatch => {
    try {
        dispatch({ type: 'removeWishListRequest' });
        const { data } = await axios.delete(`${URI}/api/v2/removeWishlist/${id}`);
        dispatch({ type: 'removeWishListSuccess', payload: data });
    } catch (error) {
        dispatch({
            type: 'removeWishListFail',
            payload: error.response.data.message,
        });
    }
};

//Get WishList Data
export const getWishList = () => async dispatch => {
    try {
        dispatch({ type: 'getWishListRequest' });
        const { data } = await axios.get(`${URI}/api/v2/wishlist`);
        dispatch({ type: 'getWishListSuccess', payload: data.wishlistData });
    } catch (error) {
        dispatch({ type: 'getWishListFail', payload: error.response.data.message });
    }
};

//Get Cart Data
export const getCart = () => async dispatch => {
    try {
        dispatch({ type: 'getCartRequest' });
        const { data } = await axios.get(`${URI}/api/v2/cart`);
        dispatch({ type: 'getCartSuccess', payload: data });
    } catch (error) {
        dispatch({ type: 'getCartFail', payload: error.response.data.message });
    }
};

export const addCart =
    (
        productName,
        quantity,
        productImage,
        productPrice,
        userId,
        productId,
        Stock,
    ) =>
        async dispatch => {
            try {
                dispatch({ type: 'addCartRequest' });
                const { data } = await axios.post(
                    `${URI}/api/v2/addToCart`,
                    {
                        productName,
                        quantity,
                        productImage,
                        productPrice,
                        userId,
                        productId,
                        Stock,
                    },
                    // CONFIG,
                );
                dispatch({ type: 'addCartSuccess', payload: data });
            } catch (error) {
                dispatch({ type: 'addCartFail', payload: error.response.data.message });
            }
        };

export const removeCart = id => async dispatch => {
    try {
        dispatch({ type: 'removeCartRequest' });
        const { data } = await axios.delete(`${URI}/api/v2/removeCart/${id}`);
        dispatch({ type: 'removeCartSuccess', payload: data });
    } catch (error) {
        dispatch({ type: 'removeCartFail', payload: error.response.data.message });
    }
};

export const updateCart = (id, quantity) => async dispatch => {
    try {
        dispatch({ type: 'updateCartRequest' });
        const { data } = await axios.put(
            `${URI}/api/v2/cart/update/${id}`,
            {
                quantity,
            },
            // CONFIG,
        );
        dispatch({ type: 'updateCartSuccess', payload: data });
    } catch (error) {
        dispatch({ type: 'updateCartFail', payload: error.response.data.message });
    }
};
