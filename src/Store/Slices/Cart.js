import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers:{
        addTOCart: (state, action) => {
            state.push(action.payload)
        },

        removeCart: (state , action)=>{
         return state.filter((p)=>p.id !== action.payload);
        }
    }
});

export const{addTOCart ,removeCart} = cartSlice.actions ;
export default cartSlice.reducer;