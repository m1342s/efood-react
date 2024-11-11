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
export const EntregaContainer = styled.div`
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

.cepNumero{
display:flex;
margin-bottom:8px;
.divCep{
margin-right:20px;
.cep{
width: 155px;
height: 32px;
background: ${Cores.salmaoClaro};
color:${Cores.cinza};
font-size: 14px;
font-weight: 700;
line-height: 16.41px;
text-align: left;
border:none;
}
label{
font-size: 14px;
font-weight: 700;
line-height: 16.41px;
text-align: left;
color:${Cores.branca};
}
}
}
.divNumero{
label{
font-size: 14px;
font-weight: 700;
line-height: 16.41px;
text-align: left;
color:${Cores.branca};
}
input{
width: 155px;
height: 32px;
background: ${Cores.salmaoClaro}
color:${Cores.cinza};
font-size: 14px;
font-weight: 700;
line-height: 16.41px;
text-align: left;
border:none;
}
}



h3{
font-family: Roboto;
font-size: 16px;
font-weight: 700;
line-height: 18.75px;
color:${Cores.branca};
margin-bottom:16px;
margin-top:32px;
}

input{
color:${Cores.cinza};
font-size: 14px;
font-weight: 700;
line-height: 16.41px;
text-align: left;
border:none;
}
.labelInput{
display:flex;
flex-direction:column;
margin-bottom:8px;

label{
font-size: 14px;
font-weight: 700;
line-height: 16.41px;
text-align: left;
color:${Cores.branca};
}

.inputPadrao{
width: 344px;
height: 32px;
background-color:${Cores.salmaoClaro};

}
}
.divBotoes{
display:flex;
flex-direction:column;
gap:12px;
margin-top:20px;
button{
width: 344px;
height: 24px;
font-size: 14px;
font-weight: 700;
line-height: 16.41px;
text-align: center;
color:${Cores.salmao};

}
}
`;
