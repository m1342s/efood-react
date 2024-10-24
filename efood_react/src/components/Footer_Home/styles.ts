import styled from "styled-components";
import { Cores } from "../../style";

export const FooterStyles=styled.footer`
width: 100vw;
height: 298px;
background-color:${Cores.salmaoClaro};
display:flex;
flex-direction:column;
align-items: center;
padding-top:40px;

div{
margin-top:20px;
}

p{
margin-top:30px;
font-family: Roboto;
font-size: 10px;
font-weight: 400;
line-height: 11.72px;
text-align: center;
color: ${Cores.salmao}
}
`