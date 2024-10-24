import styled from "styled-components";
import { Cores } from "../../style";

export const ProdutoListaPerfilStyles = styled.li`
  width: 320px;
  height: 338px;
  background-color: ${Cores.salmao};
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap:10px;
  padding-left:8px;

  

  h4 {
    color: ${Cores.salmaoClaro};
    font-size: 16px;
    font-weight: 900;
    line-height: 18.75px;
    text-align: left;
  }
  p {
    color: ${Cores.salmaoClaro};
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
  }
  button {
    width: 304px;
    height: 24px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.41px;
    text-align: center;
    display:flex;
    justify-content: center;
    align-items: center;
    color:${Cores.salmao};
    background-color: ${Cores.salmaoClaro}
    border:none;
  }
`;
