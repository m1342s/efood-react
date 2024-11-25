/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { FooterHome } from "../../components/Footer_Home";
import { HeaderHome } from "../../components/Header_Home";
import { ListaHome } from "../../components/Lista_Home";
import { Produto } from "../../utils/Produto";

export const Home = () => {
  const [produtos,setProdutos]=useState<Produto[]>([])
  
  useEffect(()=>{
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
    .then((res)=>res.json())
    .then((res)=>setProdutos(res))
  },[])
  return(
  <>
    <HeaderHome />
    <ListaHome produtos={produtos} />
    <FooterHome />
  </>
  )
};
