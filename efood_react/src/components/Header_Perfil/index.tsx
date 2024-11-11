 
import fundoHome from "../../assets/fundo.png"
import { HeaderPerfilStyles } from "./styles"
import logo from "../../assets/logo.png"
import { open} from "../../store/reducers/cart"
import { useDispatch } from "react-redux"

export const HeaderPerfil=()=>{
     const dispatch=useDispatch()

     const openCart=()=>{
        dispatch(open())
     }

    return(
        <HeaderPerfilStyles>
        <img src={fundoHome} alt="fundo"/>
        <div className="header-content">
        <p className="restaurantes">Restaurantes</p>
         <img className="logo" src={logo} alt="logo"/>
         <span onClick={openCart} className="carrinho">0 produto(s) no carrinho</span>
         </div>
        </HeaderPerfilStyles>
    )
}