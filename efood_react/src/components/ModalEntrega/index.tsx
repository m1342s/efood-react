export const ModalEntrega=()=>{
    return(
        <>
        <h3>Entrega</h3>
        <form>
        <label htmlFor="receptor">Quem irá receber</label>
        <input type="text" id="receptor" />
        <label htmlFor="endereco">Endereço</label>
        <input type="text" id="endereco" />
        <label htmlFor="cidade">Cidade</label>
        <input type="text" id="cidade" />
        <label htmlFor="cep">CEP</label>
        <input type="text" id="cep" />
        <label htmlFor="numero">Número</label>
        <input type="text" id="numero" />
        <label htmlFor="complemento">Complemento(opcional)</label>
        <input type="text" id="complemento" />
        <button type="submit">Continuar com o pagamento</button>
        <button type="submit">Voltar para o Carrinho</button>
        </form>
        </>
    )
}