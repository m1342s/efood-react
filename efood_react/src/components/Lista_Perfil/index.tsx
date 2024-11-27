import { ListaPerfilStyles } from "./styles";
import { ListaRestauranteProduto } from "../Lista_Home";
import { ProdutoListaPerfil } from "../Produto_Lista_Perfil";

export type Props = {
  produtos: ListaRestauranteProduto[];
};

export const ListaPerfil = ({ produtos }: Props) => {
  return (
    <div>
    <ListaPerfilStyles>
      {produtos.map((obj) =>
        obj.cardapio.map((item) => (
          <ProdutoListaPerfil
            key={item.id}
            id={item.id}
            imagem={item.foto}
            descricao={item.descricao}
            nome={item.nome}
          />
        ))
      )}
    </ListaPerfilStyles>
    </div>
  );
};
