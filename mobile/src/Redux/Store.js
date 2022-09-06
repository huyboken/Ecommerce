import { configureStore } from "@reduxjs/toolkit";
import { ProductReducer } from "./Reducers/ProductReducer";

const Store = configureStore({
    reducer: {
        products: ProductReducer
    }
})

export default Store