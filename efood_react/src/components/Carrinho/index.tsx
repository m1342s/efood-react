/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useState } from "react";

import pizza from "../../../assets/pizza.png";
import lixeira from "../../../assets/lixeira.png";
import { CartContext } from "../../Provider/CartProvider";
import { CarrinhoProduto } from "./Produto_Carrinho";

interface IProductCart {
  id: number;
  imagem: string;
  nome: string;
  preco: number;
  lixeira: string;
}
interface ICartShopping {
  product: IProductCart;
}

const produtos: IProductCart[] = [
  {
    id: 1,
    imagem: pizza,
    nome: "Pizza Margherita",
    preco: 60.9,
    lixeira: lixeira,
  },
  {
    id: 2,
    imagem: pizza,
    nome: "Pizza Margherita",
    preco: 60.9,
    lixeira: lixeira,
  },
  {
    id: 3,
    imagem: pizza,
    nome: "Pizza Margherita",
    preco: 60.9,
    lixeira: lixeira,
  },
  {
    id: 4,
    imagem: pizza,
    nome: "Pizza Margherita",
    preco: 60.9,
    lixeira: lixeira,
  },
];

export const Carrinho = () => {
  const [shoppingCart, setShoppingCart] = useState<ICartShopping[]>([]);
  const{addtoCart,carrinho,cart,openModalCart,removefromCart,setCart,setOpenModalCart}=useContext(CartContext)


  return (
    <>
      <ul>
        {carrinho.map(produtoCarrinho=>{
         return <CarrinhoProduto key={produtoCarrinho.id} product={produtoCarrinho}/>
})}
      </ul>
      <p>
        Valor total:<span>{}</span>
      </p>
    </>
  );
};
