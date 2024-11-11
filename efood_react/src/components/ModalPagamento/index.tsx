/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import { BarraLateral, Fundo, PagamentoContainer } from "./styles";

export const ModalPagamento = () => {
  return (
    <>
      <PagamentoContainer>
        <Fundo />
        <BarraLateral>
          <h3>
            Pagamento-valor a pagar<span>R$190,00</span>
          </h3>
          <form>
            <div className="labelInput">
              <label htmlFor="nome-cartao">Nome no cartão</label>
              <input type="text" id="nome-cartao" />
            </div>
            <div className="numeroCvv">
              <div className="numero">
                <label htmlFor="numero-cartao">Número do cartão</label>
                <input type="text" id="numero-cartao" />
              </div>
              <div className="cvv">
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" />
              </div>
            </div>
            <div className="mesAno">
              <div className="mes">
                <label htmlFor="mes-vencimento">Mês de vencimento</label>
                <input type="text" id="mes-vencimento" />
              </div>
              <div className="ano">
                <label htmlFor="ano-vencimento">Ano de vencimento</label>
                <input type="text" id="ano-vencimento" />
              </div>
            </div>
            <div className="botoes">
              <Link to="/encerramento">
                <button type="submit">Finalizar pagamento</button>
              </Link>
              <Link to="/pagamento">
                <button type="submit">Voltar para a ediçao de endereço</button>
              </Link>
            </div>
          </form>
        </BarraLateral>
      </PagamentoContainer>
    </>
  );
};
