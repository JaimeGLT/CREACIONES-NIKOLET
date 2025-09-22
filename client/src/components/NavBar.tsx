import { ChevronDown } from 'lucide-react'
import logo from '../../public/logo.svg'

const NavBar = () => {

    const shopSubElements = [
        {
            name: "VESTIDOS",
            redirection: "/vestidos"
        },
        {
            name: "BLUSAS",
            redirection: "/blusas"
        },
        {
            name: "PANTALONES",
            redirection: "/pantalones"
        },
        {
            name: "CONJUNTOS",
            redirection: "/conjuntos"
        },
        {
            name: "CASUAL",
            redirection: "/casual"
        },
        {
            name: "FIESTA",
            redirection: "/fiesta"
        },
        {
            name: "ESCOLAR",
            redirection: "/colegial"
        },
    ]

  return (
    <header>
        <nav className='flex justify-between pl-15 pr-[10%] items-center'>
            <ul className='flex items-center justify-center'>
                <li>
                    <a href="/">
                        <img className='w-55 h-auto block' src={logo} alt="logo de creaciones nikolet" title='Ir a la página principal'/>
                    </a>
                </li>
            </ul>
            <ul className='flex justify-center items-center text-sm gap-15'>
                <li><a className='font-hug-me hover:text-secondary-pink' href="/">INICIO</a></li>

                <li className='relative group flex flex-row gap-1 items-center justify-center font-hug-me hover:text-secondary-pink'>TIENDA <ChevronDown className='size-4'/>
                    <ul className='absolute left-0 top-full text-black bg-secondary-light hidden group-hover:flex flex-col gap-3 py-1 rounded-lg z-10'>
                        {
                            shopSubElements.map((item, index) => (
                                <li key={index} className=''>
                                    <a className='bg-secondary-light rounded-sm block font-sans text-[0.75rem] py-1 w-full px-2 hover:text-white hover:bg-primary' 
                                    href={item.redirection}>{item.name}</a>
                                </li>

                            ))
                        }
                    </ul>
                </li>

                <li><a className='font-hug-me hover:text-secondary-pink' href="/cuenta">MI CUENTA</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar