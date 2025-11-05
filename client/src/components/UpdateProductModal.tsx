import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { createProduct } from '../schema/productSchema';
import Input from './Input';
import type { EditProductType } from '../types/ProductType';
import { getHook } from '../hooks/getHook';
import Loading from './Loading';
import usePatch from '../hooks/patchHook';
import toast from 'react-hot-toast';
import Select from './Select';

interface UpdateProductModalProps {
    id: number | null;
    setState: (state: boolean) => void;
    onUpdate: () => void;
}

const UpdateProductModal = ({ setState, id, onUpdate }: UpdateProductModalProps) => {
    
    const { data, loading } = getHook(`/Productos/${id}`);
    const { patchData, loading: patchLoading } = usePatch(`/Productos/${id}`);
    const { data: subCategorias } = getHook("/Subcategorias");

    const { 
        register,
        handleSubmit,
        formState: { errors },
        reset 
    } = useForm({
        resolver: zodResolver(createProduct),
        defaultValues: {
            codigo: "",
            nombre: "",
            descripcion: "",
            costoCompra: 0,
            costoVenta: 0,
            stock: 0,
            idSubcategoria: 0
        }
    });


    useEffect(() => {
        if (data && !loading) {
            reset({
                codigo: data.codigo, 
                nombre: data.nombre,
                descripcion: data.descripcion,
                costoCompra: data.costoCompra,
                costoVenta: data.costoVenta,
                stock: data.stock,
                idSubcategoria: data.idSubcategoria
            });
        }
    }, [data, loading, reset]);


    const onSubmit = async (body: EditProductType) => {

        const dataToSend = {
                id: data.id,
                codigo: body.codigo, 
                nombre: body.nombre,
                descripcion: body.descripcion,
                costoCompra: body.costoCompra,
                costoVenta: body.costoVenta,
                stock: body.stock,
                idSubcategoria: body.idSubcategoria
        }

        try {
            await patchData(dataToSend);
            onUpdate();
            toast.success("Producto actualizado correctamente");
            setState(false);
        } catch (error) {
            console.log(error);
            
            toast.error("Ocurrió un error")
        }

    }

    return (
        loading ? <Loading /> :
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-1'>
                <Input 
                    inputName='codigo'
                    color="purple"
                    labelContent='Código'
                    placeholder='Ej: 3JJS87L'
                    {...register("codigo")}
                    error={errors?.codigo?.message}
                />
                <Input 
                    inputName='nombre'
                    color="purple"
                    labelContent='Nombre'
                    placeholder='Ej: Jean san juan'
                    {...register("nombre")}
                    error={errors?.nombre?.message}
                />
                <Input 
                    inputName='descripcion'
                    color="purple"
                    labelContent='Descripctión'
                    placeholder='Ej: Pantalones licra con refuerzo de neopreno'
                    {...register("descripcion")}
                    error={errors?.descripcion?.message}
                />
                <div className='flex gap-2 w-full'>
                    <Input 
                        inputName='costoCompra'
                        color="purple"
                        labelContent='Precio de compra (Bs)'
                        placeholder='Ej: 10'
                        type='number'
                        step={0.01}
                        {...register("costoCompra")}
                        error={errors?.costoCompra?.message}
                    />
                    <Input 
                        inputName='costoVenta'
                        color="purple"
                        labelContent='Precio de venta (Bs)'
                        placeholder='Ej: 45'
                        type='number'
                        step={0.01}
                        {...register("costoVenta")}
                        error={errors?.costoVenta?.message}
                    />
                </div>
                <Input 
                    inputName='stock'
                    color="purple"
                    labelContent='Stock'
                    placeholder='0'
                    {...register("stock")}
                    error={errors?.stock?.message}
                />

                <Select 
                    labelContent='SubCategoria'
                    opts={subCategorias}
                    color='purple'
                    selectName='idSubcategoria'
                    defaultValue={data?.idSubcategoria}
                    {...register("idSubcategoria")}

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
                        Añadir Producto
                    </button>
                </div>

            </form>
            
    )
}

export default UpdateProductModal