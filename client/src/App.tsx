import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import { Slogan } from './components/Slogan'
import PrincipalPage from './pages/principalPage/PrincipalPage'
import EscolarPage from './pages/Escolar/EscolarPage'

function App() {

  return (
    <BrowserRouter>

    <Slogan />
    <NavBar />

      <Routes>
        <Route path="/" element={<PrincipalPage />}/>
        <Route path="/colegial" element={<EscolarPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
