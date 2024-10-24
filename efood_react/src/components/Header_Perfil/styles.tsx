import styled from "styled-components";
import { Cores } from "../../style";

export const HeaderPerfilStyles = styled.header`
  img {
    width: 100vw;
    height: 186px;
  }
  .header-content {
    display: flex;
    position: relative;
    top: -150px;
    justify-content: space-around;
    margin-top: 21px;
    align-items: center;
  }
  .logo {
    width: 125px;
    height: 57.5px;
  }
  span,
  p {
    font-size: 18px;
    font-weight: 900;
    line-height: 21.09px;
    color: ${Cores.salmao}
  }
`;
