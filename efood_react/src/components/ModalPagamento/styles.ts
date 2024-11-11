import styled from "styled-components";
import { Cores } from "../../style";

export const Fundo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.8;
`;
export const PagamentoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`;
export const BarraLateral = styled.aside`
background-color:${Cores.salmao};
width: 360px;
height: 1624px;
z-index:1;
padding-left:8px;

h3{
font-size: 16px;
font-weight: 700;
line-height: 18.75px;
text-align: left;
color:${Cores.salmaoClaro};
margin-bottom:16px;
margin-top:32px;
}
.labelInput{
display:flex;
flex-direction:column;
gap:8px;
margin-bottom:8px;
label{
font-size: 14px;
font-weight: 700;
line-height: 16.41px;
text-align: left;
color:${Cores.salmaoClaro};
}
input{
width: 344px;
height: 32px;
font-size: 14px;
font-weight: 700;
line-height: 16.41px;
text-align: left;
color:${Cores.cinza};
}
}
.numeroCvv{
display:flex;
margin-bottom:8px;
.numero{
label{
font-size: 14px;
font-weight: 700;
line-height: 16.41px;
text-align: left;
color:${Cores.salmaoClaro};
}
input{
width: 228px;
height: 32px;
font-size: 14px;
font-weight: 700;
line-height: 16.41px;
text-align: left;
color:${Cores.cinza};
}
}
.cvv{
label{
font-size: 14px;
font-weight: 700;
line-height: 16.41px;
text-align: left;
color:${Cores.salmaoClaro};
}
input{
width: 87px;
height: 32px;
font-size: 14px;
font-weight: 700;
line-height: 16.41px;
text-align: left;
color:${Cores.cinza};
}

}
}
.mesAno{
display:flex;
margin-bottom:24px;
.mes{
label{
font-size: 14px;
font-weight: 700;
line-height: 16.41px;
text-align: left;
color:${Cores.salmaoClaro};
}
input{
width: 155px;
height: 32px;
font-size: 14px;
font-weight: 700;
line-height: 16.41px;
text-align: left;
color:${Cores.cinza};
}
}
.ano{
label{
font-size: 14px;
font-weight: 700;
line-height: 16.41px;
text-align: left;
color:${Cores.salmaoClaro};
}
input{
width: 155px;
height: 32px;
font-size: 14px;
font-weight: 700;
line-height: 16.41px;
text-align: left;
color:${Cores.cinza};
}
}
}
}
.botoes{
display:flex;
flex-direction:column;
button{
width: 344px;
height: 24px;
font-size: 14px;
font-weight: 700;
line-height: 16.41px;
text-align: center;
color:${Cores.salmao};
border:none;
margin-bottom:8px;
}
}
`;
