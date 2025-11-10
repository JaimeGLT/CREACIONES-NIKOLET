import { X } from 'lucide-react';
import React, { useEffect } from 'react'

interface ModalProps {
    state: boolean;
    setState:(state: boolean) => void;
    children: React.ReactNode;
    title?: string;
    description?: string;
}

const Modal = ({state, setState, children, title, description }: ModalProps) => {

    
    useEffect(() => {
        if (state) {
            // Desactiva el scroll
            document.body.style.overflow = 'hidden';
        } else {
            // Reactiva el scroll
            document.body.style.overflow = '';
        }
        
        // Limpieza por si el componente se desmonta
        return () => {
            document.body.style.overflow = '';
        };
    }, [state]);
    
    if(!state) return null;

    return (
        <div className='bg-[#00000050] fixed inset-0 w-full h-full flex items-center justify-center p-3 sm:p-5 md:p-10 z-50'>
            <div className="relative max-w-[500px] w-full max-h-[80vh] rounded-2xl overflow-auto p-6 
                            bg-gradient-to-br from-pink-100 via-pink-50 to-purple-100 
                            shadow-2xl border-2 border-white/50">
                <X 
                className='absolute right-3 top-3 cursor-pointer bg-white/60 hover:bg-white/80 rounded-lg p-1 text-purple-600 transition-all'
                onClick={() => setState(false)}
                size={24}
                />
                <h3 className='font-semibold text-xl font-paloseco text-pink-700'>{title}</h3>
                <p className='font-paloseco-light text-pink-600/80 text-sm mt-1'>{description}</p>
                <div className='w-full border-b-2 border-b-purple-200/50 mb-4 mt-4'></div>
                <div>
                {children}
                </div>
            </div>
        </div>

    )
}

export default Modal