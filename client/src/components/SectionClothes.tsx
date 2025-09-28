import React from 'react'

interface SectionProps {
    title: string;
    children: React.ReactNode
}

const SectionClothes = ({title, children}: SectionProps) => {
    return (
        <section className='w-full h-full'>
            <div className='h-20 sm:h-30 bg-primary w-full md:h-40 flex items-center justify-center'>
                <h2 className='font-paloseco text-2xl sm:text-4xl md:text-6xl text-white'>{title}</h2>
            </div>
                
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