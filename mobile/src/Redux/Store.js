import { configureStore } from "@reduxjs/toolkit";
import { orderDataReducer } from "./Reducers/OrderDataReducer";
import { cartAddReducer, cartDataReducer, cartRemoveReducer, cartUpdateReducer, productsReducer, wishListAddReducer, wishListDataReducer, wishListRemoveReducer } from "./Reducers/ProductReducer";
import { forgotPasswordReducer, userReducer } from "./Reducers/UserReducer";

const Store = configureStore({
    reducer: {
        products: productsReducer,
        user: userReducer,
        forgotPassword: forgotPasswordReducer,
        wishList: wishListDataReducer,
        wishtListAdd: wishListAddReducer,
        wishListRemove: wishListRemoveReducer,
        cart: cartDataReducer,
        cartAdd: cartAddReducer,
        cartRemove: cartRemoveReducer,
        cartUpdate: cartUpdateReducer,
        orderData: orderDataReducer

    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }),
})

export default Store