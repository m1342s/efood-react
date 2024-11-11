 
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GlobalStyle } from "./style"
import { Home } from "./pages/Home"
import { Perfil } from "./pages/Perfil"
import { Carrinho } from "./components/Carrinho"
import { Provider } from "react-redux"
import { store } from "./store"
import { Entrega } from "./pages/Entrega"
import { Pagamento } from "./pages/Pagamento"
import { Encerramento } from "./pages/Encerramento"

export const Rotas=()=>(
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/perfil" element={<Perfil/>}/>
    <Route path="/entrega" element={<Entrega/>}/>
    <Route path="/pagamento" element={<Pagamento/>}/>
    <Route path="/encerramento" element={<Encerramento/>}/>
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
