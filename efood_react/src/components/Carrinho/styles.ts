import styled from "styled-components";
import { Cores } from "../../style";

export const CartContent = styled.div`
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
display:none;
justify-content: flex-end;
z-index:1;

&.is-open{
display:flex;
}

aside{
background-color:${Cores.salmao};
z-index:1;
padding-top:32px;
padding-left:8px;
padding-right:8px;
width:360px;

ul{
display:flex;
flex-direction:column;
gap: 10px;
}

.valorTotal{
display:flex;
justify-content: space-between;
margin-top:20px;
margin-bottom:16px;
}
.valor{
font-family: Roboto;
font-size: 14px;
font-weight: 700;
line-height: 16.41px;
color:${Cores.salmaoClaro};
}

.cardCarrinho{
display:flex;
width: 344px;
height: 100px;
background: ${Cores.salmaoClaro};
.imgProduto{
width: 80px;
height: 80px;
margin-left:8px;
margin-top:8px;

}
h4{
font-family: Roboto;
font-weight: 900;
line-height: 21.09px;
color: ${Cores.salmao};
margin-top:8px;
}
.nomePreco{
display:flex;
flex-direction:column;
gap:16px;
margin-left:8px;
.preco{
font-family: Roboto;
font-size: 14px;
font-weight: 400;
line-height: 22px;
text-align: left;
color: ${Cores.salmao};

}
}

.divLixeira{
display:flex;
align-items: flex-end;
margin-left:88px;
margin-bottom:8px;
margin-right:8px;
.lixeira{
width: 16px;
height: 16px;
}
}
}
button{
width: 344px;
height: 24px;
font-family: Roboto;
font-size: 14px;
font-weight: 700;
line-height: 16.41px;
text-align: center;
color:${Cores.salmao}
}
`;


