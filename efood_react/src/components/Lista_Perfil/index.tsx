import { useContext } from "react";
import { ProdutoListaPerfil } from "../Produto_Lista_Perfil";
import { ListaPerfilStyles } from "./styles";
import { CartContext } from "../../Provider/CartProvider";

export const ListaPerfil=()=>{
    const{addtoCart,carrinho,cart,openModalCart,removefromCart,setCart,setOpenModalCart}=useContext(CartContext)
return(
    <ListaPerfilStyles>
        <ProdutoListaPerfil/>
        <ProdutoListaPerfil/>
        <ProdutoListaPerfil/>
        <ProdutoListaPerfil/>
        <ProdutoListaPerfil/>
        <ProdutoListaPerfil/>
    </ListaPerfilStyles>
)
}
    
