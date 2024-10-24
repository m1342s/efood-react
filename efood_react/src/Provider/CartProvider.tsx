/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import pizza from "../assets/pizza.png";
import lixeira from "../assets/lixeira.png";
import React, { createContext, useState } from "react";

interface IProductCart {
  id: number;
  imagem: string;
  nome: string;
  preco: number;
  lixeira: string;
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

interface ICartContext{
    carrinho: IProductCart[]
    openModalCart:boolean
    setOpenModalCart: React.Dispatch<React.SetStateAction<boolean>>
  cart:IProductCart[]
  setCart:React.Dispatch<React.SetStateAction<IProductCart[]>>
  addtoCart: (id: number) => void
  removefromCart: (id: number) => void
}




  interface ICartShopping {
    product: IProductCart;
  }
  interface ICartProvider{
    children:React.ReactNode
  }

  export const CartContext=createContext({} as ICartContext )
  CartContext.Provider

  export const CartProvider=({children}:ICartProvider)=>{
    const [shoppingCart, setShoppingCart] = useState<ICartShopping[]>([]);
    const [openModalCart, setOpenModalCart] = useState(false);
    const [cart, setCart] = useState<IProductCart[]>([] as IProductCart[] );
   
    const addtoCart=(id:number)=>{
     const newProduct=produtos.find(produto=>produto.id===id) as IProductCart
     const productExists=cart.some(produto=>produto.id===id)
     if(productExists){
      alert("Esse produto já foi adicionado ao carrinho")
     } else{
      const adicionar:IProductCart[]=[...cart,newProduct]
      setCart(adicionar)
     }
    }
    const removefromCart=(id:number)=>{
      const remover=produtos.filter(produto=>produto.id===id)
      setCart(remover)
    }
    return <CartContext.Provider value={{cart, carrinho,openModalCart,setCart,addtoCart,removefromCart,setOpenModalCart}}>{children}</CartContext.Provider>
  }

  