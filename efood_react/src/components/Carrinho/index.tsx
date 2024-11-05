 
 
 
 
import { Fundo } from "../../style";
import {CartContent} from "./styles"
import pizza from "../../assets/pizza.png"
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { close } from "../../store/reducers/cart";



export const Carrinho = () => {
 const {isOpen }=useSelector((state:RootReducer)=>state.cart)

 const dispatch=useDispatch()

 const closeCart=()=>{
  dispatch(close())
 }

  return (
    <>
    <CartContent className={isOpen? 'is-open': '' }>
      <Fundo onClick={closeCart}/>
      <aside>
        <ul>
        <li className="cardCarrinho">
          <img className="cardCarrinhoImagem" src={pizza} alt="pizza" />
          <div className="nomePreco">
          <h4 className="nome">Nome</h4>
          <span className="preco">Preço</span>
          </div>
          <div className="divLixeira">
          <img  className="lixeira" src="https://placehold.co/16x16" alt="lixeira" />
          </div>
        </li>
      </ul>
      <div className="valorTotal">
      <p className="valor">Valor Total</p>
      <span className="valor">R$ 182,70</span>
      </div>
      <button className="continuar" type="button">Continuar com a entrega</button>
      </aside>
    </CartContent>
    </>
  );
};
