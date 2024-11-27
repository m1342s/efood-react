 
import { useState, useEffect } from "react";
import { BannerPerfil } from "../../components/Banner_Perfil";
import { Carrinho } from "../../components/Carrinho";
import { HeaderPerfil } from "../../components/Header_Perfil";
import { ListaRestauranteProduto } from "../../components/Lista_Home";
import { ListaPerfil } from "../../components/Lista_Perfil";

export const Perfil=()=>{
    const [produtos,setProdutos]=useState<ListaRestauranteProduto[]>([])
  
    useEffect(()=>{
      fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res)=>res.json())
      .then((res)=>setProdutos(res))
    },[])
    return(
    <>
    <HeaderPerfil/>
    <BannerPerfil/>
    <ListaPerfil produtos={produtos} />
    <Carrinho produtos={produtos}/>
    </>
    )
}