import { configureStore } from "@reduxjs/toolkit";
import { ProductsReducer } from "./Reducers/ProductReducer";
import { UserReducer } from "./Reducers/UserReducer";

const Store = configureStore({
    reducer: {
        products: ProductsReducer,
        user: UserReducer
    }
})

export default Store