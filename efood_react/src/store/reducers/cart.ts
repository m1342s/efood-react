 
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ListaRestauranteProduto } from "../../components/Lista_Home";


type CartState = {
  items: ListaRestauranteProduto[];
  isOpen: boolean;
};

const initialState: CartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ListaRestauranteProduto>) => {
      const productExistance = state.items.find(
        (produto) => produto.id === action.payload.id
      );
      if (!productExistance) {
        state.items.push(action.payload);
      } else {
        alert("Esse produto já foi adicionado ao carrinho!");
      }
    },
    removefromCart: (state, action: PayloadAction<number>) => {
      state.items=state.items.filter(item=>item.id!==action.payload)
    },
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});
export const { addToCart, open, close,removefromCart } = cartSlice.actions;
export default cartSlice.reducer;
