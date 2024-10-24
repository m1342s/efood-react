import fundoHome from "../../assets/fundo.png"
import logo from "../../assets/logo.png"
import { ImagemFundoBannerHome } from "./styles"

export const HeaderHome=()=>(
    <ImagemFundoBannerHome style={{backgroundImage:`url(${fundoHome})`}}>
    <div className="imgIntro">
    <img className="logoImg" src={logo} />
    <p className="intro">Viva experiências gastronômicas no conforto da sua casa</p>
    </div>
    </ImagemFundoBannerHome>
)