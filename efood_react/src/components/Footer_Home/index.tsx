import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import { FooterStyles } from "./styles";

export const FooterHome = () => (
  <FooterStyles>
    <img src={logo} />
    <div>
      <img src={instagram} />
      <img src={twitter} />
      <img src={facebook} />
    </div>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{" "}
    </p>
  </FooterStyles>
);
