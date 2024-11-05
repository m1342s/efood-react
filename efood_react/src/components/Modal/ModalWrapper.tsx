/* eslint-disable @typescript-eslint/no-unused-vars */
import pizza from "../../assets/pizza.png";
import { ModalStyles } from "./styles";
import fechar from "../../assets/fechar.png";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export const Modal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <>
      <ModalStyles>
        <div className="imgNomeFechar">
          <img className="imgModal" src={pizza} alt="pizza" />
          <div className="nomeTexto">
            <h4>Pizza Marguerita</h4>
            <p className="descricao">
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
            </p>
            <p className="serve">Serve: de 2 a 3 pessoas</p>
            <button type="button" className="add">
              Adicionar ao carrinho-R$ 60,90
            </button>
          </div>
          <img src={fechar} className="fechar" onClick={onClose} />
        </div>
      </ModalStyles>
    </>
  );
};
