/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ProdutoListaPerfilStyles } from "./styles";
import pizza from "../../assets/pizza.png";

import { useDispatch } from "react-redux";

import { addToCart } from "../../store/reducers/cart";
import { Produto } from "../../models/Produto";


type Props = {
  produto: ProductList;
};



export type ProductList = {
  id: number;
  imagem: string;
  nome: string;
  descricao: string;
};




export const ProdutoListaPerfil = (
  { imagem, descricao, nome }: Produto,
   {produto} : Props
) => {

  const dispatch = useDispatch();

  const add = () => {
    dispatch(addToCart(produto));
  };

  return (
    <>
      <ProdutoListaPerfilStyles>
        <img src={imagem} alt="pizza" />
        <h4>{nome}</h4>
        <p>{descricao}</p>
        <button onClick={add} type="button">
          Adicionar ao carrinho
        </button>
      </ProdutoListaPerfilStyles>
    </>
  );
};
