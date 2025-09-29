import React from 'react'

interface TitleSectionProps {
    title: string;
    children?: React.ReactNode
}

const TitleSection = ({title, children}: TitleSectionProps) => {
  return (
    <div>
        <div className='bg-primary w-full h-20 xl:h-40 flex flex-col items-center justify-center'>
            <h2 className='font-paloseco text-xl md:text-2xl xl:text-5xl text-white'>{title}</h2>
        </div>
        
        <div className='h-full'>
            {
                children
            }
        </div>
    </div>
  )
}

export default TitleSection