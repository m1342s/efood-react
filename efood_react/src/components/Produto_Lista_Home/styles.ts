import styled from "styled-components";
import { Cores } from "../../style";

export const ProdutoListaHomeStyles = styled.li`
display:flex;
flex-direction:column;
width: 472px;
height: 398px;
border: 1px solid ${Cores.salmao}
opacity: 0px;
gap:5px;

h4,p,.nota{
  color:${Cores.salmao}
}
.info{
display:flex;
justify-content:space-between;
align-items:center;
}

h4,.nota{
font-size: 18px;
font-weight: 700;
line-height: 21.09px;
text-align: left;
}

.avaliacao{
display:flex;
align-items:center;
gap:2px;
}

button {
background-color: ${Cores.salmao};
color:#fff; 
font-size: 14px;
font-weight: 700;
line-height: 16.41px;
text-align: center;
width: 82px;
height: 24px;
border: none;
}
`;
export const Imagem=styled.div`
width: 472px;
height: 217px;
display:flex;

.tagItaliana{
width: 61px;
height: 26px;
background-color: ${Cores.salmao};
color:${Cores.salmaoClaro};
}

.divTag{
display:flex;

}
`