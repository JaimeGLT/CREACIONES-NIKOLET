import { PencilRuler, Plus } from 'lucide-react';
import React from 'react'

interface SectionProps {
    title: string;
    children: React.ReactNode;
    setState: (state: boolean) => void; 
    setEditTitleState: (state: boolean) => void;
    showProductos: boolean;
    roleUser: string | undefined;
}

const SectionClothes = ({title, children, setState, setEditTitleState, showProductos, roleUser }: SectionProps) => {

    const isAdmin = roleUser === "Admin";

    return (
        <section className='w-full h-full'>
            <div className='h-20 sm:h-30 bg-primary w-full md:h-30 flex gap-2 items-center justify-center'>
                {
                        roleUser === "Admin" && 
                            <div className='flex items-center justify-center hover:bg-white text-white hover:text-black p-2 rounded-full cursor-pointer'
                                title='Editar'
                                onClick={() => setEditTitleState(true)}
                            >
                                <PencilRuler className='text-center size-6 sm:size-10 md:size-13' />
                            </div>
                            
                }
                <h2 className='font-paloseco text-2xl sm:text-4xl md:text-6xl text-white text-center'>{title}</h2>
            </div>

            {
                isAdmin && 
                <button
                    onClick={() => setState(true)}
                    title="Agregar producto"
                    className="
                        fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50
                        w-13 h-13
                        sm:w-20 sm:h-20
                        lg:w-24 lg:h-24
                        rounded-full
                        bg-white
                        text-[#F393A4]
                        border-2 border-[#F393A4]
                        shadow-lg shadow-pink-300/40
                        flex items-center justify-center
                        hover:bg-[#F393A4] hover:text-white
                        active:scale-95
                        transition-all duration-300 ease-out
                        cursor-pointer
                    "
                    >
                    <Plus className='size-7 sm:size-12 lg:size-14' strokeWidth={2.5} />
                </button>
            }

            <div
                className={`w-full md:p-20 xl:p-30 px-4 py-20 md:py-30 xl:py-40 ${showProductos ? "grid" : "flex"} grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(257px,1fr))] gap-x-8 gap-y-10 md:gap-y-25 place-items-center `}
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