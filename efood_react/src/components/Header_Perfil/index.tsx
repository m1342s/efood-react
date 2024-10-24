import fundoHome from "../../assets/fundo.png"
import { HeaderPerfilStyles } from "./styles"
import logo from "../../assets/logo.png"


export const HeaderPerfil=()=>(
    <HeaderPerfilStyles>
    <img src={fundoHome} alt="fundo"/>
    <div className="header-content">
    <p className="restaurantes">Restaurantes</p>
     <img className="logo" src={logo} alt="logo"/>
     <span className="carrinho">0 produto(s) no carrinho</span>
     </div>
    </HeaderPerfilStyles>
)