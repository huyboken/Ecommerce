import { configureStore } from "@reduxjs/toolkit";
import { ProductsReducer } from "./Reducers/ProductReducer";
import { forgotPasswordReducer, UserReducer } from "./Reducers/UserReducer";

const Store = configureStore({
    reducer: {
        products: ProductsReducer,
        user: UserReducer,
        forgotPassword: forgotPasswordReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }),
})

export default Store