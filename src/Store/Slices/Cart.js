import {createSlice} from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name: 'cart',
    initialState:[],
    reducers:{
        addTOCart : (state,action) => {
            state.push(action.payload)
        }
    }
})

export const {addTOCart} = cartSlice.actions;
export default cartSlice.reducer;