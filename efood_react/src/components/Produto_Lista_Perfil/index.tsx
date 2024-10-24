import pizza from "../../assets/pizza.png";
import { ProdutoListaPerfilStyles } from "./styles";

export const ProdutoListaPerfil = () => (
  <ProdutoListaPerfilStyles>
    <img src={pizza} alt="pizza" />
    <h4>Pizza Marguerita</h4>
    <p>
      A clássica Marguerita: molho de tomate suculento, mussarela derretida,
      manjericão fresco e um toque de azeite. Sabor e simplicidade!
    </p>
    <button type="button">Adicionar ao carrinho</button>
  </ProdutoListaPerfilStyles>
);
