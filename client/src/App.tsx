import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import { Slogan } from './components/Slogan'
import PrincipalPage from './pages/principalPage/PrincipalPage'
import EscolarPage from './pages/Escolar/EscolarPage'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Fiesta from './pages/fiesta/Fiesta'
import Casual from './pages/casual/Casual'
import Vestidos from './pages/vestidos/Vestidos'
import Blusas from './pages/blusas/Blusas'
import Pantalones from './pages/pantalones/Pantalones'
import Conjuntos from './pages/conjuntos/Conjuntos'

function App() {

  return (
    <BrowserRouter>

    <Slogan />
    <NavBar />

      <Routes>
        <Route path="/" element={<PrincipalPage />}/>
        <Route path="/colegial" element={<EscolarPage />}/>
        <Route path='/fiesta' element={<Fiesta />}/>
        <Route path='/casual' element={<Casual />}/>
        <Route path='/vestidos' element={<Vestidos />}/>
        <Route path='/blusas' element={<Blusas />}/>
        <Route path='/pantalones' element={<Pantalones />}/>
        <Route path='/conjuntos' element={<Conjuntos />}/>
      </Routes>

      <Footer />
      <Contact />
    </BrowserRouter>
  )
}

export default App
