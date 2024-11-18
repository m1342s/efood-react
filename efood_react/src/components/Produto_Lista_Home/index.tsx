 
import sushi from "../../assets/sushi.png"
import estrela from "../../assets/estrela.png"
import massa from "../../assets/massa.png"
import { Imagem, ProdutoListaHomeStyles } from "./styles"
import { useState } from "react"
import { Modal } from "../Modal/ModalWrapper"



export const ProdutosListaHome=()=>{
  const[stateIsOpen,setStateIsOpen]=useState(false)

  const handleModal=()=>{
    setStateIsOpen(!stateIsOpen)
  }

  return( <>
    <ProdutoListaHomeStyles>
      <Imagem style={{backgroundImage:`url(${sushi})`}}>
      <div className="Tags">
        <span className="destaque">Destaque da semana</span>
        <span className="tagJaponesa">Japonesa</span>
      </div>
      </Imagem>
      
      <div className="info">
      <h4>Hioki Sushi</h4>
      <div className="avaliacao">
        <p className="nota" id="notaJaponesa">4.9</p>
        <img className='estrela' src={estrela} />
      </div>
      </div>
      <p>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão
        sem sair do lar com nosso delivery!
      </p>
      <button onClick={handleModal} type="button">Saiba mais</button>
    </ProdutoListaHomeStyles>
    <ProdutoListaHomeStyles>
    <Imagem style={{backgroundImage:`url(${massa})`}}>
        <div className="divTag">
        <p className="tagItaliana">Italiana</p>
        </div>
      </Imagem>
      <div className="info">
      <h4>La Dolce Vita Trattoria</h4>
      <div className="avaliacao">
        <span className="nota">4.6</span>
        <img className='estrela' src={estrela} />
      </div>
      </div>
      <p>
        A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
        Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo
        no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor
        inesquecível. Peça já!
      </p>
      <button onClick={handleModal} type="button">Saiba mais</button>
    </ProdutoListaHomeStyles>
    <ProdutoListaHomeStyles>
    <Imagem style={{backgroundImage:`url(${massa})`}}>
    <div className="divTag">
        <p className="tagItaliana">Italiana</p>
        </div>
      </Imagem>
      <div className="info">
      <h4>La Dolce Vita Trattoria</h4>
      <div className="avaliacao">
        <span className="nota">4.6</span>
        <img className='estrela' src={estrela} />
      </div>
      </div>
      <p>
        A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
        Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo
        no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor
        inesquecível. Peça já!
      </p>
      <button onClick={handleModal} type="button">Saiba mais</button>
    </ProdutoListaHomeStyles>
    <ProdutoListaHomeStyles>
    <Imagem style={{backgroundImage:`url(${massa})`}}>
    <div className="divTag">
        <p className="tagItaliana">Italiana</p>
        </div>
      </Imagem>
      <div className="info">
      <h4>La Dolce Vita Trattoria</h4>
      <div className="avaliacao">
        <span className="nota">4.6</span>
        <img className='estrela' src={estrela} />
      </div>
      </div>
      <p>
        A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
        Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo
        no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor
        inesquecível. Peça já!
      </p>
      <button onClick={handleModal} type="button">Saiba mais</button>
    </ProdutoListaHomeStyles>
    <ProdutoListaHomeStyles>
    <Imagem style={{backgroundImage:`url(${massa})`}}>
    <div className="divTag">
        <p className="tagItaliana">Italiana</p>
        </div>
      </Imagem>
      <div className="info">
      <h4>La Dolce Vita Trattoria</h4>
      <div className="avaliacao">
        <span className="nota">4.6</span>
        <img className='estrela' src={estrela}/>
      </div>
      </div>
      <p>
        A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
        Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo
        no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor
        inesquecível. Peça já!
      </p>
      <button onClick={handleModal} type="button">Saiba mais</button>
    </ProdutoListaHomeStyles>
    <ProdutoListaHomeStyles>
    <Imagem style={{backgroundImage:`url(${massa})`}}>
    <div className="divTag">
        <p className="tagItaliana">Italiana</p>
        </div>
      </Imagem>
      <div className="info">
      <h4>La Dolce Vita Trattoria</h4>
      <div className="avaliacao">
        <span className="nota">4.6</span>
        <img className='estrela' src={estrela}/>
      </div>
      </div>
      <p>
        A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
        Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo
        no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor
        inesquecível. Peça já!
      </p>
      <button onClick={handleModal} type="button">Saiba mais</button>
    </ProdutoListaHomeStyles>
    <Modal isOpen={stateIsOpen} onClose={handleModal} />
    </>)
   
}