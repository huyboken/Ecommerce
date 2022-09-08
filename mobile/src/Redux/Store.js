import { configureStore } from "@reduxjs/toolkit";
import { ProductsReducer } from "./Reducers/ProductReducer";

const Store = configureStore({
    reducer: {
        products: ProductsReducer
    }
})

export default Store