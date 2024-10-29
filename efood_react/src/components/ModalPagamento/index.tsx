export const ModalEntrega=()=>{
    return(
        <>
        <h3>Pagamento-valor a pagar<span>R$190,00</span></h3>
        <form>
        <label htmlFor="nome-cartao">Nome no cartão</label>
        <input type="text" id="nome-cartao" />
        <label htmlFor="numero-cartao">Número do cartão</label>
        <input type="text" id="numero-cartao" />
        <label htmlFor="cvv">CVV</label>
        <input type="text" id="cvv" />
        <label htmlFor="mes-vencimento">Mês de vencimento</label>
        <input type="text" id="mes-vencimento" />
        <button type="submit">Finalizar Pagamento</button>
        <button type="submit">Voltar para edição de endereço</button>
        </form>
        </>
    )
}