import { configureStore } from "@reduxjs/toolkit"
import cartSlice from './Slices/Cart'

const store = configureStore({
    reducer:{
        carts:cartSlice
    }
});
export default store;