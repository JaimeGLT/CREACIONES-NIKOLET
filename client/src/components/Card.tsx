import img1 from '/images/escolar-1.jpg'
import heart from '/heart.svg'

const Card = () => {
    return (
        <div className="bg-white flex flex-col p-4 rounded-4xl w-full max-w-[257px] gap-4">
            <div className='relative'>
                <img className='aspect-[3/4] rounded-t-4xl h-full w-full object-cover' src={img1} alt="" />
                <svg className='absolute top-5 right-4 z-10 fill-white hover:fill-red-500 cursor-pointer'
                    width="32" height="30" viewBox="0 0 32 30" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9665 2.48374C17.7906 0.824682 20.1702 -0.0614179 22.6167 0.00739049C25.0633 0.0761989 27.3911 1.09469 29.1222 2.85374C30.8514 4.61155 31.8537 6.97525 31.9238 9.46032C31.9938 11.9454 31.1262 14.3636 29.4989 16.2192L15.9633 30L2.43094 16.2192C0.801649 14.3626 -0.066755 11.9423 0.00400844 9.45528C0.0747719 6.96821 1.07933 4.60305 2.81145 2.84535C4.54358 1.08766 6.87183 0.0708073 9.31821 0.0035605C11.7646 -0.0636863 14.1435 0.823774 15.9665 2.48374Z"/>
                </svg>
            </div>
            <div className='bg-secondary-light flex flex-col gap-2 font-paloseco-light p-4 rounded-b-4xl'>
                <h3>MODA</h3>
                <p>Descripción</p>
                <p>Precio</p>
            </div>
        </div>
    )
}

export default Card