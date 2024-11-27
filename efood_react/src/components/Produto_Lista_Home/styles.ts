import styled from "styled-components";
import { Cores } from "../../style";

export const ProdutoListaHomeStyles = styled.li`
  display: flex;
  flex-direction: column;
  width: 472px;
  height: 398px;
  border: 1px solid ${Cores.salmao};
  .estrela {
    width: 21px;
    height: 20px;
    margin-left: 8px;
  }
  .nomeAvaliacao {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 8px 8px 16px;
    h4 {
      font-size: 18px;
      font-weight: 700;
      line-height: 21.09px;
      text-align: left;
      color: ${Cores.salmao};
    }
    .avaliacao {
      display: flex;
      span {
        font-size: 18px;
        font-weight: 700;
        line-height: 21.09px;
        text-align: center;
        color: ${Cores.salmao};
      }
    }
  }
    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      text-align: left;
      color: ${Cores.salmao};
      margin-bottom:16px;
      margin-left:8px;
    }
    button{
    width: 82px;
    height: 24px;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.41px;
    text-align: center;
    color:${Cores.salmaoClaro};
    background:${Cores.salmao};
    margin-left:8px;
    margin-bottom:8px;
    border:none;
    padding-top: 4px;
    padding-right:6px;
    padding-bottom:6px;
    padding-left:4px;
    }
`;
export const Imagem = styled.div`
  width: 100%;
  height: 217px;
  background-repeat: no-repeat;
  background-size: cover;
  .tag {
    display: flex;
    justify-content: flex-end;
    margin: 16px 16px 0 0;
    span {
      font-size: 12px;
      font-weight: 700;
      line-height: 14.06px;
      text-align: center;
      color: ${Cores.salmaoClaro};
      background: ${Cores.salmao};
      width: 61px;
      height: 26px;
      padding: 6px 11px 6px 5px;
    }
  }
`;

export const Modal=styled.div`
justify-content:center;
align-items:center;
position:fixed;
top:0;
left:0;
display:none;
width:100%;
height:100%;

&.visible{
display:flex;

}

.overlay{
top:0;
left:0;
position:absolute;
width:100%;
height:100%;
background-color:rgba(0,0,0,0.8);
}
`
export const ModalContent=styled.div`
display:flex;
position:relative;
z-index:1;
background-color:${Cores.salmao};
max-width: 960px;
height: 344px;
padding-top:32px;

.content{
display:flex;
flex-direction:column;
margin-left:24px;
}
.imgProduto{
width: 280px;
height: 280px;
margin-left:32px;
}
h4{
font-size: 18px;
font-weight: 900;
line-height: 21.09px;
color:white;
margin-bottom:16px;
}
p{
font-family: Roboto;
font-size: 14px;
font-weight: 400;
line-height: 22px;
text-align: left;
color:white;
margin-bottom:16px;
}

.fechar{
width: 16px;
height: 16px;
margin-right:8px;
}
button{
width: 218px;
height: 24px;
font-size: 14px;
font-weight: 700;
line-height: 16.41px;
text-align: center;
color:${Cores.salmao};
border:none;
padding:4px 7px 4px 7px;
}
`