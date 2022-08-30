import axios from "axios";
import {
    ADMIN_PRODUCT_FAIL,
    ADMIN_PRODUCT_REQUEST,
    ADMIN_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    CLEAR_ERRORS,
    DELETE_PRODUCT_FAIL,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    NEW_PRODUCT_FAIL,
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    NEW_REVIEW_FAIL,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
} from "../constans/ProductConstans";

export const getProduct =
    (keyword = "", currentPage = 1, category) =>
        async (dispatch) => {
            try {
                dispatch({
                    type: ALL_PRODUCT_REQUEST,
                });

                let link = `/api/v2/products?keyword=${keyword}&page=${currentPage}`;

                if (category) {
                    link = `/api/v2/products?keyword=${keyword}&page=${currentPage}&category=${category}`;
                }

                const { data } = await axios.get(link);

                dispatch({
                    type: ALL_PRODUCT_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                dispatch({
                    type: ALL_PRODUCT_FAIL,
                    payload: error.response.data.message,
                });
            }
        };

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_DETAILS_REQUEST,
        });

        const { data } = await axios.get(`/api/v2/product/${id}`);
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data.product,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response.message,
        });
    }
};

//New review
export const newReview = (reviewData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_REVIEW_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.post(
            "/api/v2/product/review",
            reviewData,
            config
        );
        dispatch({ type: NEW_REVIEW_SUCCESS, payload: data.success });
    } catch (error) {
        dispatch({ type: NEW_REVIEW_FAIL, payload: error.response.data.message });
    }
};

//Get admin products --Admin
export const getAdminProduct = () => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_PRODUCT_REQUEST });
        const { data } = await axios.get("/api/v2/admin/products");
        dispatch({ type: ADMIN_PRODUCT_SUCCESS, payload: data.products });
    } catch (error) {
        dispatch({
            type: ADMIN_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    }
};

//Delete Product --Admin
export const deleteProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_PRODUCT_REQUEST });
        const { data } = await axios.delete(`/api/v2/product/${id}`)
        dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: data.success })
    } catch (error) {
        dispatch({ type: DELETE_PRODUCT_FAIL, payload: error.response.data.message })
    }
}

//Create product --Admin
export const createProduct = (productData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_PRODUCT_REQUEST })
        const config = { headers: { "Content-Type": "application/json" } }
        const { data } = await axios.post("/api/v2/product/new", productData, config)
        dispatch({ type: NEW_PRODUCT_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: NEW_PRODUCT_FAIL, payload: error.response.data.message })
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    });
};
