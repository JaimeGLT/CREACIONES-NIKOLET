import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import { Slogan } from './components/Slogan'
import PrincipalPage from './pages/principalPage/PrincipalPage'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Login from './pages/login/Login'
import { Toaster } from 'react-hot-toast'
import SubCategoryPage from './pages/SubCategory/SubCategoryPage'
import { getHook } from './hooks/getHook'
import { useEffect, useState } from 'react'
import type { UserType } from './types/UserType'
import TouchTrail from './components/TouchTrail'

function App() {

  const [ user, setUser ] = useState<UserType | null >(null);
  const { data } = getHook("/Usuario/GetUsuario");
  useEffect(() => {
    setUser(data?.resultado);
    console.log(user);
  }, [data]);
  
  
  return (
    <>

    <Slogan />
    <NavBar />
    <TouchTrail />
      <Routes>
        {/* Renderiza todas las paginas de subcategorias */}
        <Route path="/:category" element={<SubCategoryPage user={user}/>}/>


        <Route path="/" element={<PrincipalPage />}/>
        <Route path='/mi-cuenta' element={<Login />}/>
      </Routes>

      <Footer />
      <Contact />
      <Toaster 
        position='top-right'
      />
    </>
  )
}

export default App
