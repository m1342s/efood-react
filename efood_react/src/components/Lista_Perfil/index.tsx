 
import { ProdutoListaPerfil } from "../Produto_Lista_Perfil";
import { ListaPerfilStyles } from "./styles";
import pizza from "../../assets/pizza.png";

type ProductList={
    id:number,
    imagem:string,
    nome: string,
    descricao:string
    preco:number
}


const produtosLista:ProductList[] = [
  {
    id: 1,
    imagem: pizza,
    nome: "Pizza Margherita",
    descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    preco: 69.90
  },
  {
    id: 2,
    imagem: pizza,
    nome: "Pizza Margherita",
    descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    preco: 69.90
  },
  {
    id: 3,
    imagem: pizza,
    nome: "Pizza Margherita",
    descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    preco: 69.90
  },
  {
    id: 4,
    imagem: pizza,
    nome: "Pizza Margherita",
    descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    preco: 69.90
  },
  {
    id: 5,
    imagem: pizza,
    nome: "Pizza Margherita",
    descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    preco: 69.90
  },
  {
    id: 6,
    imagem: pizza,
    nome: "Pizza Margherita",
    descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    preco: 69.90
  },
];

export const ListaPerfil = () => {
  return <ListaPerfilStyles>
    {produtosLista.map((produtoLista)=>
      <ProdutoListaPerfil key={produtoLista.id} produto={produtoLista}/>
    )}
    
  </ListaPerfilStyles>;
  
};
