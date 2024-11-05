/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import pizza from "../../assets/pizza.png"
import { ProductList } from "../../components/Produto_Lista_Perfil";

type CartState={
    items:ProductList[],
    isOpen:boolean
}

const produtosLista: ProductList[] = [
    {
      id: 1,
      imagem: pizza,
      nome: "Pizza Margherita",
      descricao:
        "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    },
    {
      id: 2,
      imagem: pizza,
      nome: "Pizza Margherita",
      descricao:
        "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    },
    {
      id: 3,
      imagem: pizza,
      nome: "Pizza Margherita",
      descricao:
        "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    },
    {
      id: 4,
      imagem: pizza,
      nome: "Pizza Margherita",
      descricao:
        "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    },
  ];


const initialState:CartState={
    items:[],
    isOpen:false
}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{

        addToCart:(state,action:PayloadAction<ProductList>)=>{
         const productExistance=state.items.find((produto)=>produto.id===action.payload.id)
         if(!productExistance){
            state.items.push(action.payload)
         }
         else{
            alert('Esse produto já foi adicionado ao carrinho!')
         }
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