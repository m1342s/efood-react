/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

import pizza from "../../../assets/pizza.png";
import lixeira from "../../../assets/lixeira.png";

interface IProductCart {
  id: number;
  imagem: string;
  nome: string;
  preco: number;
  lixeira: string;
}
interface ICartShopping{
    product:IProductCart
}
const produtos:IProductCart[] = [
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

export const CarrinhoProduto = ({product}:ICartShopping) => {
  <li>
    <img src={product.imagem}/>
    <h4>{product.nome}</h4>
    <span>{product.preco}</span>
    <img src={product.lixeira} />
  </li>
};
