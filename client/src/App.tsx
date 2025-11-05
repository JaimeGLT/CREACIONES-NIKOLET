import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import { Slogan } from './components/Slogan'
import PrincipalPage from './pages/principalPage/PrincipalPage'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Login from './pages/login/Login'
import { Toaster } from 'react-hot-toast'
import SubCategoryPage from './pages/SubCategory/SubCategoryPage'

function App() {

  return (
    <BrowserRouter>

    <Slogan />
    <NavBar />

      <Routes>
        {/* Renderiza todas las paginas de subcategorias */}
        <Route path="/:category" element={<SubCategoryPage />}/>


        <Route path="/" element={<PrincipalPage />}/>
        {/* <Route path="/colegial" element={<EscolarPage />}/>
        <Route path='/fiesta' element={<Fiesta />}/>
        <Route path='/casual' element={<Casual />}/>
        <Route path='/vestidos' element={<Vestidos />}/>
        <Route path='/blusas' element={<Blusas />}/>
        <Route path='/pantalones' element={<Pantalones />}/>
        <Route path='/conjuntos' element={<Conjuntos />}/> */}
        <Route path='/login' element={<Login />}/>
      </Routes>

      <Footer />
      <Contact />
      <Toaster 
        position='top-right'
      />
    </BrowserRouter>
  )
}

export default App
