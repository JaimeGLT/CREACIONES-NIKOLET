import React from 'react'

interface SectionProps {
    title: string;
    children: React.ReactElement
}

const SectionClothes = ({title, children}: SectionProps) => {
    return (
        <section className='w-full h-[80vh]'>
            <div className='bg-primary w-full h-50 flex items-center justify-center'>
                <h2 className='font-paloseco text-7xl text-white'>{title}</h2>
            </div>
                
<div
                className="h-[300vh] w-full"
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