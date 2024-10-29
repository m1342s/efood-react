/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GlobalStyle } from "./style"
import { Home } from "./pages/Home"
import { Perfil } from "./pages/Perfil"
import { Carrinho } from "./components/Carrinho"
import { Provider } from "react-redux"
import { store } from "./store"

export const Rotas=()=>(
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/perfil" element={<Perfil/>}/>
  </Routes>
)

function App() {

  return (
    <Provider store={store}>
    <BrowserRouter>
    <GlobalStyle/>
    <Rotas/>
    <Carrinho/>
    </BrowserRouter>
    </Provider>
  )
}

export default App
