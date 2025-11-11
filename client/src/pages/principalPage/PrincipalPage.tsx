import About from "./About"
import Categorias from "./Categorias"
import FrontPage from "./FrontPage"
import Promos from "./Promos"

interface PrincipalPageProps {
  userRole: string | undefined;
}

const PrincipalPage = ({ userRole }: PrincipalPageProps) => {
  return (
    <div className="p-0 m-0">
        <FrontPage />
        <About />
        <Promos userRole={userRole}/>
        <Categorias />
    </div>
  )
}

export default PrincipalPage