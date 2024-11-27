 
import estrela from "../../assets/estrela.png";
import fechar from "../../assets/fechar.png";

import { Imagem, Modal, ModalContent, ProdutoListaHomeStyles } from "./styles";

import { useState } from "react";

export type ProductData = {
  imagem: string;
  nome: string;
  tipo: string;
  descricao: string;
  avaliacao: number;
  preco: number;
  porcao: string;
};

export const ProdutosListaHome = ({
  imagem,
  tipo,
  nome,
  descricao,
  avaliacao,
  preco,
  porcao,
}: ProductData) => {
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <>
      <ProdutoListaHomeStyles>
        <Imagem
          style={{ backgroundImage: `url(${imagem})`, objectFit: "contain" }}
        >
          <div className="tag">
            <span>{tipo}</span>
          </div>
        </Imagem>
        <div className="nomeAvaliacao">
          <h4>{nome}</h4>
          <div className="avaliacao">
            <span>{avaliacao}</span>
            <img className="estrela" src={estrela} alt="estrela" />
          </div>
        </div>
        <p>{descricao}</p>
        <button onClick={() => setModalAberto(true)}>Saiba mais</button>
      </ProdutoListaHomeStyles>
      <Modal className={modalAberto ? "visible" : ""}>
        <ModalContent className="container">
          <img className="imgProduto" src={imagem} alt={nome} />
          <div className="content">
            <h4>{nome}</h4>
            <p>{descricao}</p>
            <p>Serve:{porcao}</p>
            <button>Adicionar ao carrinho-R${preco}0</button>
          </div>
          <img
            className="fechar"
            src={fechar}
            onClick={() => setModalAberto(false)}
            alt="Ícone de fechar"
          />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  );
};
