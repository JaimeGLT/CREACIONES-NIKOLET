import { Ellipsis, Trash2 } from "lucide-react";

interface CardProps {
    url?: string;
    id: number;
    nombre?: string;
    description?: string;
    precio?: number;
    state?: boolean;
    setState?: (state: boolean) => void;
    setCurrentProductId: (id: number) => void;
    setDeleteProductState: (state: boolean) => void;
    roleUser: string | undefined;
}

const Card = ({url, nombre, description, precio, setState, id ,setCurrentProductId, setDeleteProductState, roleUser}: CardProps) => {
    return (
        <div className="bg-white flex flex-col p-2 sm:p-4 rounded-4xl w-full max-w-[257px] gap-2 sm:gap-4">
            <div className='relative'>
                {
                    roleUser === "Admin" ? (
                        <div className="absolute top-2 left-0 flex flex-col gap-2">
                            <div className="bg-gray-200 rounded-full p-2 z-10 flex items-center justify-center cursor-pointer"
                                onClick={(() => {setState && setState(true); setCurrentProductId(id)})}
                                title="Editar Producto"
                            >
                                <Ellipsis className="size-5"/>
                            </div>
                            <div className="bg-red-200 rounded-full p-2 z-10 flex items-center justify-center cursor-pointer"
                                onClick={(() => {setState && setDeleteProductState(true); setCurrentProductId(id)})}
                                title="Eliminar Producto"
                            >
                                <Trash2 className="size-5 text-red-700"/>
                            </div>
                        </div>
                    ) : ""
                }

                <img className='aspect-[3/4] rounded-t-4xl h-full w-full object-cover bg-center bg-no-repeat' src={url} alt={nombre} />
                <svg className='absolute size-7  top-2 right-3 sm:top-5 sm:right-4 z-10 fill-white hover:fill-red-500 cursor-pointer'
                     viewBox="0 0 32 30" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9665 2.48374C17.7906 0.824682 20.1702 -0.0614179 22.6167 0.00739049C25.0633 0.0761989 27.3911 1.09469 29.1222 2.85374C30.8514 4.61155 31.8537 6.97525 31.9238 9.46032C31.9938 11.9454 31.1262 14.3636 29.4989 16.2192L15.9633 30L2.43094 16.2192C0.801649 14.3626 -0.066755 11.9423 0.00400844 9.45528C0.0747719 6.96821 1.07933 4.60305 2.81145 2.84535C4.54358 1.08766 6.87183 0.0708073 9.31821 0.0035605C11.7646 -0.0636863 14.1435 0.823774 15.9665 2.48374Z"
                    stroke="black"
                    strokeWidth="1"
                    />
                </svg>
            </div>
            <div className='bg-secondary-light flex flex-col gap-2 font-paloseco-light p-4 rounded-b-4xl'>
                <h3 className='text-xs md:text-base font-semibold'>{nombre}</h3>
                <p className='text-xs md:text-base'>{description && description?.length > 30 ? description?.slice(0,10) + "..." : description}</p>
                <p className='text-xs md:text-base'>Bs {precio}</p>
            </div>
        </div>
    )
}

export default Card