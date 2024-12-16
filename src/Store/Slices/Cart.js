import {createSlice} from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name: 'cart',
    initialState:[],
    reducers:{
        addTOCart : (state,action) => {
            state.push(action.payload)
        },
        removeCart: (state,action) => {
            return state.filter(item => item.id !== action.payload.id);
        }
    }
})

export const {addTOCart} = cartSlice.actions;
export default cartSlice.reducer;