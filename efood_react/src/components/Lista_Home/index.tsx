/* eslint-disable @typescript-eslint/no-unused-vars */
 

import { Produto } from "../../utils/Produto";
import { ProdutosListaHome } from "../Produto_Lista_Home";
import { ProdutoListaHomeStyles } from "../Produto_Lista_Home/styles";
import { Container, ListaHomeStyles } from "./styles";

export type ProdutoProps={
produtos:Produto[]
}

export const ListaHome = ({produtos}:ProdutoProps) => (
  <Container>
  <ListaHomeStyles>
    {produtos.map((produto)=>(<li key={produto.id}>
      <ProdutosListaHome imagem={produto.foto} tipo={produto.tipo} nome={produto.nome} descricao={produto.descricao} avaliacao={produto.avaliacao}  />
    </li>))}
  </ListaHomeStyles>
  </Container>
);
