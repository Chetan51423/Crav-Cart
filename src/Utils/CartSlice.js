
import { createSlice } from "@reduxjs/toolkit"

const CartSlice = createSlice(
    {
        name:"cart",
        initialState:{items:[],},
        reducers:{
            addItem:(state, action)=>{ 
                state.items.push(action.payload) 
            },
            deleteItem:(state, action)=>{
                
                state.items = state.items.filter(item => item.name !== action.payload);
             },
            clearItem:(state)=>{
                 state.items=[] 
            },
        },
    }
) 

export const {addItem,deleteItem, clearItem} =CartSlice.actions;
export default CartSlice.reducer;