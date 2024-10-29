/* eslint-disable @typescript-eslint/no-unused-vars */
import { ProdutoListaPerfil } from "../Produto_Lista_Perfil";
import { ListaPerfilStyles } from "./styles";
import pizza from "../../assets/pizza.png";
import { Carrinho } from "../Carrinho";

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
  {
    id:5,
    imagem: pizza,
    nome: "Pizza Margherita",
    descricao:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    id:6,
    imagem: pizza,
    nome: "Pizza Margherita",
    descricao:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
];

export const ListaPerfil = () => {
  return <ListaPerfilStyles>
    {produtosLista.map(produtoLista=>
      <ProdutoListaPerfil key={produtoLista.id} id={produtoLista.id} imagem={produtoLista.imagem} nome={produtoLista.nome} descricao={produtoLista.descricao}/>
    )}
    
  </ListaPerfilStyles>;
  
};
