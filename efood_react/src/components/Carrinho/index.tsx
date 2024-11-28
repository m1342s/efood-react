/* eslint-disable @typescript-eslint/no-unused-vars */
 

import { Fundo } from "../../style";
import { CartContent } from "./styles";
import lixeira from "../../assets/lixeira.png";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { close,removefromCart } from "../../store/reducers/cart";
import { Link } from "react-router-dom";
import { ListaRestauranteProduto } from "../Lista_Home";

export type Props={
  produtos: ListaRestauranteProduto[]
}



export const Carrinho = ({produtos}:Props) => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);

  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  };

 

  const remove=(id:number)=>{
    dispatch(removefromCart(id))
  }

  return (
    <>
      <CartContent className={isOpen ? "is-open" : ""}>
        <Fundo onClick={closeCart} />
        <aside>
          <ul>
            {produtos.map((obj) => 
            obj.cardapio.map(item=><li className="cardCarrinho" key={item.id}>
              <img className="imgProduto" src={item.foto} alt={item.nome} />
              <div className="nomePreco">
              <h4>{item.nome}</h4>
              <span className="preco">R${item.preco}0</span>
              </div>
              <div className="divLixeira">
              <img className="lixeira" src={lixeira} alt="Ícone de lixeira" />
              </div>
            </li>)
            )}
          </ul>
          <div className="valorTotal">
            <p className="valor">Valor Total</p>
            <span className="valor"></span>
          </div>
          <Link to="/entrega">
          <button className="continuar" type="button">Continuar com a entrega</button>
          </Link>
        </aside>
      </CartContent>
    </>
  );
};
