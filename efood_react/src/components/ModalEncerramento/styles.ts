 
import styled from "styled-components";
import { Cores } from "../../style";
import { Link } from "react-router-dom";

export const Fundo=styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
opacity:0.8;
background:#000000;
`

export const ContainerEncerramento=styled.div`
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
justify-content:flex-end;
z-index:1;
`
export const BarraLateral=styled.aside`
width: 360px;
height: 1624px;
background-color:${Cores.salmao};
z-index:1;
padding-left:8px;
.confirmacao{
font-size: 16px;
font-weight: 700;
line-height: 18.75px;
text-align: left;
color:${Cores.salmaoClaro};
margin-top:32px;
margin-bottom:16px;
}
.textoConfirmacao{
font-family: Roboto;
font-size: 14px;
font-weight: 400;
line-height: 22px;
text-align: left;
color:${Cores.salmaoClaro};
margin-bottom:24px;
p{
margin-bottom:8px;
}
}
`
export const Concluir=styled(Link)`
width: 344px;
height: 24px;
font-size: 14px;
font-weight: 700;
line-height: 16.41px;
text-align: center;
color:${Cores.salmao};
border:none;
`