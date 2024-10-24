/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";
import { Cores } from "../../style";


export const ImagemFundoBannerHome=styled.div`
width:100vw;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:384px;

.imgIntro{
display:flex;
flex-direction:column;
gap:80px;
justify-content:center;
align-items:center;
}

.logoImg{
width: 125px;
height: 57.5px;
}

.intro{
font-family: Roboto;
font-size: 36px;
font-weight: 900;
line-height: 42.19px;
text-align: center;
color:${Cores.salmao}
}
`
