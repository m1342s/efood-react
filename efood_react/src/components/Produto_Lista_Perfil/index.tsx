 
 
 
import { ProdutoListaPerfilStyles } from "./styles";

import { useDispatch } from "react-redux";

import { addToCart, open } from "../../store/reducers/cart";


type Props = {
  produto: ListaRestauranteProduto;
};

type ProductData={
  id:number
  imagem:string
  descricao:string
  nome:string
}



export type ListaRestauranteProduto = {
  id: number;
  titulo: string;
  destacado: string;
  tipo: string;
  avaliacao: number;
  descricao: string
  capa: string;
  cardapio: [
    {
      foto: string;
      preco: number;
      id: number;
      nome: string;
      descricao: string;
      porcao: string;
      
    }
  ];
};




export const ProdutoListaPerfil = ({id,imagem,descricao,nome} : ProductData
,{produto}:Props) => {
  const dispatch = useDispatch();
 

  const add = () => {
    dispatch(addToCart(produto));
    dispatch(open())
  };

  return (
    <>
      <ProdutoListaPerfilStyles>
        <img src={imagem}/>
        <h4>{nome}</h4>
        <p>{descricao}</p>
        <button onClick={add} type="button">
          Adicionar ao carrinho
        </button>
      </ProdutoListaPerfilStyles>
    </>
  );
};
