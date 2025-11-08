import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form'
import { createProduct } from '../schema/productSchema';
import Input from './Input';

interface EditarProductModalProps {
    setState: (state: boolean) => void;
}

const EditarProductModal = ({ setState }: EditarProductModalProps) => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(createProduct)
    });

    const onSubmit = (data: any) => {
        console.log(data);
    }

    return (
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-1'>
                <Input 
                    inputName='codigo'
                    labelContent='Código'
                    placeholder='Ej: 3JJS87L'
                    {...register("codigo")}
                    error={errors?.codigo?.message}
                />
                <Input 
                    inputName='Nombre'
                    labelContent='Nombre'
                    placeholder='Ej: Jean san juan'
                    {...register("Nombre")}
                    error={errors?.Nombre?.message}
                />
                <Input 
                    inputName='Descripcion'
                    labelContent='Descripctión'
                    placeholder='Ej: Pantalones licra con refuerzo de neopreno'
                    {...register("Descripcion")}
                    error={errors?.Descripcion?.message}
                />
                <div className='flex gap-2 w-full'>
                    <Input 
                        inputName='CostoCompra'
                        labelContent='Precio de compra (Bs)'
                        placeholder='Ej: 10'
                        type='number'
                        step={0.01}
                        {...register("CostoCompra")}
                        error={errors?.CostoCompra?.message}
                    />
                    <Input 
                        inputName='CostoVenta'
                        labelContent='Precio de venta (Bs)'
                        placeholder='Ej: 45'
                        type='number'
                        step={0.01}
                        {...register("CostoVenta")}
                        error={errors?.CostoVenta?.message}
                    />
                </div>
                <Input 
                    inputName='stock'
                    labelContent='Stock'
                    placeholder='0'
                    {...register("stock")}
                    error={errors?.stock?.message}
                />

                <div className="flex justify-end items-center gap-3 mt-3">
                    <button
                        type="button"
                        className="p-2 px-4 rounded-xl cursor-pointer font-paloseco-light text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
                        onClick={() => setState(false)}
                    >
                        Cerrar
                    </button>
                    <button
                        type="submit"
                        className="p-2 px-4 bg-rose-500 rounded-xl cursor-pointer font-paloseco-light text-white hover:bg-rose-600 transition-colors"
                    >
                        Guardar Cambios
                    </button>
                </div>

            </form>
    )
}

export default EditarProductModal