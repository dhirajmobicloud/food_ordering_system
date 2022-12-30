import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './Slice/cartSlice'

export const Store = configureStore({
    reducer:{
        Cart : cartSlice
    }
})