import styled from "styled-components";
import { Cores } from "../../style";

export const ProdutoListaHomeStyles = styled.li`
  display: flex;
  flex-direction: column;
  width: 472px;
  height: 398px;
  border: 1px solid ${Cores.salmao};

  .Tags {
    display: flex;
  }

  .destaque {
    width: 121px;
    height: 26px;
    background-color: ${Cores.salmao};
    font-size: 12px;
    font-weight: 700;
    line-height: 14.06px;
    text-align: center;
    color: ${Cores.salmaoClaro};
    padding: 6px 4px;
  }
  .tagJaponesa {
    width: 61px;
    height: 26px;
    background-color: ${Cores.salmao};
    font-size: 12px;
    font-weight: 700;
    line-height: 14.06px;
    text-align: center;
    color: ${Cores.salmaoClaro};
    padding: 6px 4px;
    margin-left: 5px;
  }
  .textoJaponesa {
  }

  .estrela {
    margin-left: 8px;
  }
  h4,
  p,
  .nota {
    color: ${Cores.salmao};
  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
    margin-bottom: 16px;
    margin-left: 7px;
  }

  h4,
  .nota {
    font-size: 18px;
    font-weight: 700;
    line-height: 21.09px;
    text-align: left;
  }

  p {
    margin-bottom: 16px;
    margin-left: 8px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
  }

  .avaliacao {
    margin-right: 8px;
    display: flex;
    align-items: flex-start;
  }

  button {
    background-color: ${Cores.salmao};
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.41px;
    text-align: center;
    width: 82px;
    height: 24px;
    border: none;
    margin-left: 8px;
    margin-bottom: 8px;
  }
`;
export const Imagem = styled.div`
  width: 472px;
  height: 217px;
  display: flex;
  justify-content: flex-end;
  padding: 16px 16px;

  .tagItaliana {
    width: 61px;
    height: 26px;
    background-color: ${Cores.salmao};
    color: ${Cores.salmaoClaro};
    padding-left: 10px;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-right: 11px;
    font-size: 12px;
    font-weight: 700;
    line-height: 14.06px;

  .divTag {
    display: block;
  }
`;
