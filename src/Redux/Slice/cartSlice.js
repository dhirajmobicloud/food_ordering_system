import {createSlice} from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name:'cart',
    initialState: [],
    reducers:{
        aadToCart : (state, action)=>{
                state.unshift(action.payload)
        },

        removeFromCart : (state,action )=>{
                // state.shift(action.payload)
               let Newstate = state.filter((element)=>{
                    return element.idMeal !== action.payload
                })
                state = Newstate;
        }
    }
})

export const {aadToCart , removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;   