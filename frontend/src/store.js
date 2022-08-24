import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
} from "redux";
// import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productDetailsReducers, productReducer } from "./reducers/ProductReducer";
import { userReducer, profileReducer } from "./reducers/UserReducer";

const reducer = combineReducers({
    products: productReducer,
    productDetails: productDetailsReducers,
    user: userReducer,
    profile: profileReducer
});

let initialState = {

};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
