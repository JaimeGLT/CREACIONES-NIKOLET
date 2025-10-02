
interface TitleSectionProps {
    title: string;
    children?: React.ReactNode
}

const TitleSectionOfertas = ({title, children}: TitleSectionProps) => {
  return (
    <div>
        <div className='bg-primary w-full h-20 xl:h-40 flex flex-col items-center justify-center'>
            <h2 className='font-paloseco text-xl md:text-2xl xl:text-5xl text-white'>{title}</h2>
        </div>
        
        <div className='h-full lg:max-w-[1200px] my-[5%] xl:my-0 mx-[5%] xl:mx-auto'>
            {
                children
            }
        </div>
    </div>
  )
}

export default TitleSectionOfertas;