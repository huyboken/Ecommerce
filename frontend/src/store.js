import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
} from "redux";
// import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
    newReviewReducer,
    productDetailsReducers,
    productReducer,
} from "./reducers/ProductReducer";
import { userReducer, profileReducer } from "./reducers/UserReducer";
import { cartReducer } from "./reducers/CartReducer";
import { favouriteReducer } from "./reducers/FavouriteReducer";
import { orderDetailsReducer, myOrdersReducer, newOrderReducer } from "./reducers/OrderReducer";

const reducer = combineReducers({
    products: productReducer,
    productDetails: productDetailsReducers,
    user: userReducer,
    profile: profileReducer,
    cart: cartReducer,
    favourite: favouriteReducer,
    order: newOrderReducer,
    myOrder: myOrdersReducer,
    myOrderDetails: orderDetailsReducer,
    newReview: newReviewReducer
});

let initialState = {
    cart: {
        cartItems: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : [],
        shippingInfo: localStorage.getItem("shippingInfo")
            ? JSON.parse(localStorage.getItem("shippingInfo"))
            : [],
    },
    favourite: {
        favouriteItems: localStorage.getItem("favouriteItems")
            ? JSON.parse(localStorage.getItem("favouriteItems"))
            : [],
    },
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
