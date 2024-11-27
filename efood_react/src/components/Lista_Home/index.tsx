 

import { ProdutosListaHome } from "../Produto_Lista_Home";
import { Container, ListaHomeStyles } from "./styles";

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
export type Props = {
  produtos: ListaRestauranteProduto[];
};

export const ListaHome = ({ produtos }: Props) => (
  <>
  <Container>
    <ListaHomeStyles>
      {produtos.map((obj) =>
        obj.cardapio.map((item) => (
            <ProdutosListaHome
            key={item.id}
              imagem={item.foto}
              tipo={obj.tipo}
              avaliacao={obj.avaliacao}
              descricao={item.descricao}
              nome={item.nome}
              preco={item.preco}
              porcao={item.porcao}
            />
        ))
      )}
    </ListaHomeStyles>
  </Container>
 
  </>
  );
