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
import BubbleTrail from './components/BubbleTrail'
import RegisterPage from './pages/register/RegisterPage'
import FavoritePage from './pages/favorites/FavoritePage'
import ProfilePage from './pages/profile/ProfilePage'

function App() {

  const [ user, setUser ] = useState<UserType | null >(null);
  const { data, loading } = getHook("/Usuario/GetUsuario");
  useEffect(() => {
    setUser(data?.resultado);
    console.log(user);
    
  }, [data]);
  
  
  return (
    <>
      <Slogan />
      <NavBar user={user} loading={loading}/>
      <BubbleTrail />
        <Routes>
          {/* Renderiza todas las paginas de subcategorias */}
          <Route path="/:category" element={<SubCategoryPage user={user}/>}/> 

          <Route path="/" element={<PrincipalPage userRole={user?.role}/>}/>
          <Route path='/iniciar-sesion' element={<Login />}/>
          <Route path='/registro' element={<RegisterPage />}/>
          <Route path='/favoritos' element={<FavoritePage roleUser={user?.role}/>}/>
          <Route path='/mi-cuenta' element={<ProfilePage />}/>
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
