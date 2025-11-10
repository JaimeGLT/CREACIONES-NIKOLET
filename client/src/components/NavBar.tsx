import { useEffect, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import logo from '../../public/logo.svg'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [shopOpen, setShopOpen] = useState(false)

  const shopSubElements = [
    { name: 'VESTIDOS', redirection: '/vestidos' },
    { name: 'BLUSAS', redirection: '/blusas' },
    { name: 'PANTALONES', redirection: '/pantalones' },
    { name: 'CONJUNTOS', redirection: '/conjuntos' },
    { name: 'CASUAL', redirection: '/casual' },
    { name: 'FIESTA', redirection: '/fiesta' },
    { name: 'ESCOLAR', redirection: '/colegial' },
  ]

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {document.body.style.overflow = ''};
  }, [isOpen])

  return (
    <header className="shadow-md bg-white">
      <nav className="flex justify-between items-center px-4 md:px-10">
        <a href="/">
          <img className="w-32 h-auto md:w-50 xl:w-50" src={logo} alt="logo de creaciones nikolet" />
        </a>

        {/* Menú de pc */}
        <ul className="hidden md:flex items-center xl:gap-15 gap-8 text-sm xl:mr-10">
          <li><a className="font-hug-me hover:text-secondary-pink xl:text-base" href="/">INICIO</a></li>
          <li className="relative group flex items-center gap-1 font-hug-me hover:text-secondary-pink xl:text-base">
            TIENDA <ChevronDown className="size-4" />
            <ul className="absolute left-0 top-full text-black bg-secondary-light hidden group-hover:flex flex-col gap-3 py-1 rounded-lg z-10">
              {shopSubElements.map((item, i) => (
                <li key={i}>
                  <a
                    className="bg-secondary-light rounded-sm block font-sans text-[0.75rem] py-1 w-full px-2 hover:text-white hover:bg-primary xl:text-base"
                    href={item.redirection}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li><a className="font-hug-me hover:text-secondary-pink xl:text-base" href="/mi-cuenta">MI CUENTA</a></li>
        </ul>


        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 rounded focus:outline-none"
        >
          <Menu size={24} />
        </button>
      </nav>

      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/40 z-20 transition-opacity duration-300 ease-in-out
                    ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      <div
        className={`fixed top-0 right-0 w-2/3 h-full max-h-screen bg-primary border-l
                    overflow-y-auto z-30 transform transition-transform duration-700 ease-in-out
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <X
          size={28}
          onClick={() => setIsOpen(false)}
          className="my-5 ml-2 cursor-pointer hover:text-secondary-pink"
        />

        <ul className="flex flex-col p-4 gap-4">
          <li><a className="font-hug-me hover:text-secondary-pink" href="/">INICIO</a></li>
            <hr />
          <li>
            <button
              onClick={() => setShopOpen(!shopOpen)}
              className="w-full flex justify-between items-center font-hug-me hover:text-secondary-pink"
            >
              TIENDA
              <ChevronDown
                className={`size-4 transition-transform duration-200 ${shopOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <ul
              className={`transition-all duration-300 overflow-hidden
                          ${shopOpen ? 'max-h-96 mt-2' : 'max-h-0'}`}
            >
              {shopSubElements.map((item, i) => (
                <li key={i}>
                  <a
                    className="block font-sans text-sm py-1 pl-4 hover:text-secondary-pink"
                    href={item.redirection}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
            <hr />
          <li><a className="font-hug-me hover:text-secondary-pink" href="/mi-cuenta">MI CUENTA</a></li>
          <hr />
        </ul>
      </div>
    </header>
  )
}

export default NavBar
