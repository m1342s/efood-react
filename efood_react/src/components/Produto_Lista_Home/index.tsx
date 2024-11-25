/* eslint-disable @typescript-eslint/no-unused-vars */
import sushi from "../../assets/sushi.png";
import estrela from "../../assets/estrela.png";
import massa from "../../assets/massa.png";
import { Imagem, Modal, ModalContent, ProdutoListaHomeStyles } from "./styles";
import pizza from "../../assets/pizza.png";
import fechar from "../../assets/fechar.png";
import { useState } from "react";

export type ProductData={
imagem:string
nome:string
tipo:string
descricao:string
avaliacao:number
}

export const ProdutosListaHome = ({imagem,tipo,nome,descricao,avaliacao}:ProductData) => {
  const [modalAberto,setModalAberto]=useState(false)
 

  return (
    <>
    <div>
    <img src={imagem} alt={nome} />
    <span>{tipo}</span>
    <span>{avaliacao}</span>
    <img src={estrela} alt="estrela" />
     <p>{descricao}</p>
      <button>Saiba mais</button>
     </div>
     </>
  );
};
