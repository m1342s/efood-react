/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

export type ProductCart={
    id:number,
    image:string,
    nome:string,
    preco:string,
    lixeira:string
}

type CartState={
    items:ProductCart[],
    isOpen:boolean
}

const initialState:CartState={
    items:[],
    isOpen:false
}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action:PayloadAction<ProductCart>)=>{
         state.items.push(action.payload)
        },
        open:(state)=>{
            state.isOpen=true
        },
        close:(state)=>{
            state.isOpen=false
        }
    }

})
export const {addToCart,open,close}=cartSlice.actions
export default cartSlice.reducer