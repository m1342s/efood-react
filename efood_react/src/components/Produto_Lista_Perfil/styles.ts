import styled from "styled-components";
import { Cores } from "../../style";

export const ProdutoListaPerfilStyles = styled.li`
  width: 320px;
  height: 430px;
  background-color: ${Cores.salmao};
  margin-bottom: 32px;
  padding: 8px 8px 0px 8px;
  img {
    width: 304px;
    height: 167px;
    margin-bottom: 8px;
  }
  h4 {
    font-family: Roboto;
    font-size: 16px;
    font-weight: 900;
    line-height: 18.75px;
    color: ${Cores.salmaoClaro};
    margin-bottom: 8px;
    text-align: left;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    color: ${Cores.salmaoClaro};
    margin-bottom:8px;
  }
  button {
    width: 304px;
    height: 24px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.41px;
    text-align: center;
    color:${Cores.salmao};
    border:none;
  }
`;
