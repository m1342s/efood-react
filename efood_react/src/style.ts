 
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
padding:0;
margin:0;
font-family:Roboto,sans-serif;
box-sizing:border-box;
list-style:none;
}`;

export const Cores={
    salmao: '#E66767',
    salmaoClaro:'#FFEBD9',
    branca: '#FFFFFF',
    cinza: ' #4B4B4B'
}

export const Fundo=styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
background-color:#000;
opacity:0.80;
`