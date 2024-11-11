import { BarraLateral, Concluir, ContainerEncerramento, Fundo } from "./styles";

export const ModalEncerramento = () => (
  <>
    <ContainerEncerramento>
      <Fundo />
      <BarraLateral>
        <p className="confirmacao">Pedido realizado - ORDER_ID</p>
        <div className="textoConfirmacao">
          <p className="1p">
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p className="1p">
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p className="1p">
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p className="1p">
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
        </div>
        <Concluir to="/" >Concluir</Concluir >
      </BarraLateral>
    </ContainerEncerramento>
  </>
);
