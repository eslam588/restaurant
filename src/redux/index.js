import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"
import productSlice from './productSlice';
import langSlice from "./langSlice";

const store = configureStore({reducer:{cart : cartReducer,product : productSlice,lang:langSlice}})

export default store;