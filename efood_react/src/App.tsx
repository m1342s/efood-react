import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GlobalStyle } from "./style"
import { Home } from "./pages/Home"
import { Perfil } from "./pages/Perfil"

export const Rotas=()=>(
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/perfil" element={<Perfil/>}/>
  </Routes>
)

function App() {

  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Rotas/>
    </BrowserRouter>
  )
}

export default App
