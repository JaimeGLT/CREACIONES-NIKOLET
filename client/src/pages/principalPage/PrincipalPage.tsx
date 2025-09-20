import About from "./About"
import FrontPage from "./FrontPage"
import Promos from "./Promos"

const PrincipalPage = () => {
  return (
    <div className="p-0 m-0">
        <FrontPage />
        <About />
        <Promos />
    </div>
  )
}

export default PrincipalPage