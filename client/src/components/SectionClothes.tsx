import { Pencil } from 'lucide-react';
import React from 'react'

interface SectionProps {
    title: string;
    children: React.ReactNode;
    setState: (state: boolean) => void; 
    setEditTitleState: (state: boolean) => void;
}

const SectionClothes = ({title, children, setState, setEditTitleState }: SectionProps) => {
    return (
        <section className='w-full h-full'>
            <div className='h-20 sm:h-30 bg-primary w-full md:h-30 flex gap-2 items-center justify-center'>
                <div className='flex items-center justify-center hover:bg-white text-white hover:text-black p-2 rounded-full cursor-pointer'
                    title='Editar'
                    onClick={() => setEditTitleState(true)}
                >
                    <Pencil className=' size-10 ' />
                </div>
                <h2 className='font-paloseco text-2xl sm:text-4xl md:text-6xl text-white'>{title}</h2>
            </div>

            <button className='fixed z-40 bottom-7 right-7 bg-amber-300 p-2 px-4 rounded-xl cursor-pointer'
                onClick={() => setState(true)}
            >+ Agregar Producto</button>

            <div
                className="w-full md:p-20 xl:p-30 px-4 py-20 md:py-30 xl:py-40 grid grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(257px,1fr))] gap-x-8 gap-y-10 md:gap-y-25 place-items-center"
                style={{
                    background: `linear-gradient(
                        180deg,
                        rgba(246,178,190,0.2) 0%,
                        rgba(246,178,190,0.8) 25%,
                        rgba(246,178,190,1) 50%,
                        rgba(246,178,190,0.9) 70%,
                        rgba(246,178,190,0.2) 100%
                    )`,
                }}
            >
                {children}
            </div>
        </section>
    )
}

export default SectionClothes