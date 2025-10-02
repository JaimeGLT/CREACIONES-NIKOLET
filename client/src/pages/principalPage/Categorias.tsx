import React from 'react'
import TitleSectionOfertas from './components/TitleSectionOfertas'
import OfertasCard from './components/OfertasCard'

const Categorias = () => {
    return (
        <>
            <TitleSectionOfertas title='POR CATEGORÍA'>
                <OfertasCard />
                <div className='flex gap-4 xl:gap-20 text-sm items-center justify-center w-full mb-5 mt-10 xl:mb-30'>
                    <a href="/vestidos" className='font-hug-me bg-buttons-color text-white text-xs xl:text-lg p-2 md:p-3 xl:px-8 rounded-xl'>VESTIDOS</a>
                    <a href='/blusas' className='font-hug-me bg-buttons-color text-white text-xs xl:text-lg p-2 md:p-3 xl:px-8 rounded-xl'>BLUSAS</a>
                    <a href='/pantalones' className='font-hug-me bg-buttons-color text-white text-xs xl:text-lg p-2 md:p-3 xl:px-8 rounded-xl'>PANTALONES</a>
                    <a href='/conjuntos' className='font-hug-me bg-buttons-color text-white text-xs xl:text-lg p-2 md:p-3 xl:px-8 rounded-xl'>CONJUNTOS</a>
                </div>
            </TitleSectionOfertas>
        </>
    )
}

export default Categorias