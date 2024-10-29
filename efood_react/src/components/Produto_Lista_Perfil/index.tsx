/* eslint-disable @typescript-eslint/no-unused-vars */
import { ProdutoListaPerfilStyles } from "./styles";
import pizza from "../../assets/pizza.png"
import { Carrinho } from "../Carrinho";
import { useDispatch } from "react-redux";

import {addToCart, ProductCart} from "../../store/reducers/cart"

type CartProduct={
  product:ProductCart
}

type ProductList={
  id:number,
  imagem:string,
  nome: string,
  descricao:string
}
type Product={
  product:ProductList[]
}

const produtosLista:ProductList[] = [
{
  id:1,
  imagem: pizza,
  nome: "Pizza Margherita",
  descricao:
    "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
},
{
  id:2,
  imagem: pizza,
  nome: "Pizza Margherita",
  descricao:
    "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
},
{
  id:3,
  imagem: pizza,
  nome: "Pizza Margherita",
  descricao:
    "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
},
{
  id:4,
  imagem: pizza,
  nome: "Pizza Margherita",
  descricao:
    "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
},
];



export const ProdutoListaPerfil = ({imagem,descricao,nome}:ProductList,{product}:CartProduct) => {
   
  const dispatch=useDispatch()

  const add=()=>{
    dispatch(addToCart(product))
  }



  return(
    <>
  <ProdutoListaPerfilStyles>
    <img src={imagem} alt="pizza" />
    <h4>{nome}</h4>
    <p>
      {descricao}
    </p>
    <button onClick={add}  type="button">Adicionar ao carrinho</button>
  </ProdutoListaPerfilStyles>
   
   </>
  )
};
