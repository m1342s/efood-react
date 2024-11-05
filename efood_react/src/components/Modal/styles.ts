import styled from "styled-components";
import { Cores } from "../../style";



export const ModalStyles = styled.div`
  width: 1024px;
  height: 344px;
  background-color: ${Cores.salmao};

  .imgModal {
    width: 280px;
    height: 280px;
    margin-top: 32px;
    margin-left: 32px;
  }
  .fechar {
    width: 16px;
    height: 16px;
    margin: 8px;
  }
  .nomeTexto {
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    margin-left: 24px;
  }

  .imgNomeFechar {
    display: flex;
  }

  h4 {
    font-size: 18px;
    font-weight: 900;
    line-height: 21.09px;
    color: ${Cores.branca};
    margin-bottom: 16px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    color: ${Cores.branca};
  }

  .descricao {
    margin-bottom: 15px;
  }
  .serve {
    margin-bottom: 15px;
  }
  .add {
    width: 218px;
    height: 24px;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.41px;
    text-align: center;
    color: ${Cores.salmao};
  }
`;
