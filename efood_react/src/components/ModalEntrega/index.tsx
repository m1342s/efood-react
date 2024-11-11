 
 
import { Link } from "react-router-dom"
import { Fundo,EntregaContainer, BarraLateral } from "./styles"



export const ModalEntrega=()=>{
    return(
        <>
        <EntregaContainer>
        <Fundo/>
        <BarraLateral>
        <h3>Entrega</h3>
        <form>
        <div className="labelInput">
        <label htmlFor="receptor">Quem irá receber</label>
        <input className="inputPadrao" type="text" id="receptor" />
        </div>
        <div className="labelInput">
        <label htmlFor="endereco">Endereço</label>
        <input className="inputPadrao" type="text" id="endereco" />
        </div>
        <div className="labelInput">
        <label htmlFor="cidade">Cidade</label>
        <input className="inputPadrao" type="text" id="cidade" />
        </div>
        <div className="cepNumero">
        <div className="divCep">
        <label  htmlFor="cep">CEP</label>
        <input className="cep" type="text" id="cep" />
        </div>
        <div className="divNumero">
        <label htmlFor="numero">Número</label>
        <input type="text" id="numero" />
        </div>
        </div>
        <div className="labelInput">
        <label htmlFor="complemento">Complemento(opcional)</label>
        <input className="inputPadrao" type="text" id="complemento" />
        </div>
        <div className="divBotoes">
         <Link  to="/pagamento">
        <button type="submit">Continuar com o pagamento</button> 
        </Link>
        <Link to="/perfil">
        <button  type="submit">Voltar para o Carrinho</button>
        </Link>
        </div>
        </form>
        </BarraLateral>
        </EntregaContainer>
        </>
    )
}