 

import { Fundo } from "../../style";
import { CartContent } from "./styles";
import lixeira from "../../assets/lixeira.png";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { close,removefromCart } from "../../store/reducers/cart";
import { formataPreco } from "../../utils/format";
import { Link } from "react-router-dom";




export const Carrinho = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);

  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  };

 const valorTotal=()=>{
  return items.reduce((acc,valorAtual)=>{
     return (acc+=valorAtual.preco)
    },0)
  }

  const remove=(id:number)=>{
    dispatch(removefromCart(id))
  }

  return (
    <>
      <CartContent className={isOpen ? "is-open" : ""}>
        <Fundo onClick={closeCart} />
        <aside>
          <ul>
            {items.map((item) => (
              <li className="cardCarrinho" key={item.id}>
                <img className="imgProduto" src={item.imagem} alt={item.nome} />
                <div className="nomePreco">
                <h4>{item.nome}</h4>
                <span className="preco">R${item.preco}0</span>
                </div>
                <div className="divLixeira">
                <img onClick={()=>remove(item.id)} className="lixeira" src={lixeira} />
                </div>
              </li>
            ))}
          </ul>
          <div className="valorTotal">
            <p className="valor">Valor Total</p>
            <span className="valor">{formataPreco(valorTotal())}</span>
          </div>
          <Link to="/entrega">
          <button className="continuar" type="button">Continuar com a entrega</button>
          </Link>
        </aside>
      </CartContent>
    </>
  );
};
