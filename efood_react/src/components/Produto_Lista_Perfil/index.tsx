/* eslint-disable @typescript-eslint/no-unused-vars */
 
 
import { ProdutoListaPerfilStyles } from "./styles";

import { useDispatch } from "react-redux";

import { addToCart, open } from "../../store/reducers/cart";
import { Produto } from "../../models/Produto";


type Props = {
  produto: ProductList;
};



export type ProductList = {
  id: number;
  imagem: string;
  nome: string;
  descricao: string;
  preco:number;
};




export const ProdutoListaPerfil = ({produto} : Props
) => {
  const dispatch = useDispatch();
 const { imagem, descricao, nome }: Produto=produto
 

  const add = () => {
    dispatch(addToCart(produto));
    dispatch(open())
  };

  return (
    <>
      <ProdutoListaPerfilStyles>
        <img src={produto.imagem} alt="pizza" />
        <h4>{produto.nome}</h4>
        <p>{produto.descricao}</p>
        <button onClick={add} type="button">
          Adicionar ao carrinho
        </button>
      </ProdutoListaPerfilStyles>
    </>
  );
};
