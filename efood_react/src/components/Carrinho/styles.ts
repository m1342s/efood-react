import styled from "styled-components";
import { Cores } from "../../style";


export const CartContent=styled.div`
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
.continuar{
width: 344px;
height: 24px;
font-family: Roboto;
font-size: 14px;
font-weight: 700;
line-height: 16.41px;
text-align: center;
color:${Cores.salmao}
}
.cardCarrinho{
display:flex;
width: 344px;
height: 100px;
background-color:${Cores.salmaoClaro};
padding-top:8px;
justify-content: space-evenly;

.nomePreco{

}

.nome{
font-family: Roboto;
font-size: 18px;
font-weight: 900;
line-height: 21.09px;
color:${Cores.salmao}
}
.preco{
font-family: Roboto;
font-size: 14px;
font-weight: 400;
line-height: 22px;
color:${Cores.salmao}
}
.lixeira{
width: 16px;
height: 16px;
}
.divLixeira{
display:flex;
justify-content: center;
padding-top:70px;
padding-left:120px;

}
.nomePreco{
display:flex;
flex-direction:column;
gap:15px;
}

.cardCarrinhoImagem{
width: 80px;
height: 80px;
}
}
}
`