import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { createProduct, updateProduct } from '../../schema/productSchema';
import Input from '.././Input';
import { getHook } from '../../hooks/getHook';
import Loading from '.././Loading';
import usePatch from '../../hooks/patchHook';
import toast from 'react-hot-toast';
import Select from '.././Select';
import { ImagePlus, Trash2 } from 'lucide-react';

interface UpdateProductModalProps {
    id: number | null;
    setState: (state: boolean) => void;
    onUpdate: () => void;
}

const UpdateProductModal = ({ setState, id, onUpdate }: UpdateProductModalProps) => {
    
    const { data, loading } = getHook(`/Productos/${id}`);
    const { patchData, loading: patchLoading } = usePatch(`/Productos/${id}`);
    const { data: subCategorias } = getHook("/Subcategorias");
    const [preview, setPreview] = useState<string | null>(null);

    const { 
        register,
        handleSubmit,
        formState: { errors },
        reset 
    } = useForm({
        resolver: zodResolver(updateProduct),
        defaultValues: {
            Imagen: "",
            codigo: "",
            Nombre: "",
            Descripcion: "",
            CostoCompra: 0,
            CostoVenta: 0,
            stock: 0,
            IdSubcategoria: 0
        }
    });


    useEffect(() => {

        if (data && !loading) {
            reset({
                Imagen: undefined,
                codigo: data.codigo, 
                Nombre: data.nombre,
                Descripcion: data.descripcion,
                CostoCompra: data.costoCompra,
                CostoVenta: data.costoVenta,
                stock: data.stock,
                IdSubcategoria: data.idSubcategoria
            });

            if (data.urlImagen) 
                setPreview(data.urlImagen);
            
        }
    }, [data, loading, reset]);


    const onSubmit = async (body: any) => {

        const file = body.Imagen?.[0]

        const formData = new FormData();
        if (id !== null) {
            formData.append("id", String(id));
        }
        formData.append("Codigo", body.codigo);
        formData.append("Nombre", body.Nombre);
        formData.append("Descripcion", body.Descripcion || "");
        formData.append("CostoCompra", body.CostoCompra || 0);
        formData.append("CostoVenta", body.CostoVenta);
        formData.append("Stock", body.stock || 0);
        formData.append("IdSubcategoria", body.IdSubcategoria);
        if (file) {
            formData.append("Imagen", file);
        }
        
        try {
            await patchData(formData);
            onUpdate();
            setState(false);
            toast.success("Producto actualizado con éxito");
            
        } catch (error) {
            toast.error("Ocurrió un error");        
        }
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
        } else {
            setPreview(null);
        }
    };

    const clearImage = () => {
        setPreview(null);
        reset({ Imagen: null });
    };
    return (
        loading ? <Loading /> :
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-1'>
            <div className="flex flex-col w-full">
                        <label className="font-paloseco text-base mb-2">Imagen del producto</label>

                        <div
                        className={`relative w-full h-40 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all duration-200 ${
                            preview ? "border-purple-400" : "border-gray-300 hover:border-purple-300"
                        }`}
                        >
                        {preview ? (
                            <>
                            <img
                                src={preview}
                                alt="Vista previa"
                                className="object-cover w-full h-full rounded-2xl"
                            />
                            <button
                                type="button"
                                onClick={clearImage}
                                className="absolute top-2 right-2 bg-white/80 hover:bg-white text-red-500 p-1 rounded-full shadow-sm transition-all"
                            >
                                <Trash2 size={18} />
                            </button>
                            </>
                        ) : (
                            <>
                            <ImagePlus className="text-purple-400" size={40} />
                            <p className="text-gray-500 text-sm mt-1">Haz clic o arrastra una imagen aquí</p>
                            </>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            {...register("Imagen")}
                            onChange={handleImageChange}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        </div>

                        {errors.Imagen && (
                        <span className="text-red-500 text-xs mt-1">{errors.Imagen.message as string}</span>
                        )}
                    </div>
                <Input 
                    inputName='codigo'
                    color="purple"
                    labelContent='Código'
                    placeholder='Ej: 3JJS87L'
                    {...register("codigo")}
                    error={errors?.codigo?.message}
                />
                <Input 
                    inputName='Nombre'
                    color="purple"
                    labelContent='Nombre'
                    placeholder='Ej: Jean san juan'
                    {...register("Nombre")}
                    error={errors?.Nombre?.message}
                />
                <Input 
                    inputName='Descripcion'
                    color="purple"
                    labelContent='Descripción'
                    placeholder='Ej: Pantalones licra con refuerzo de neopreno'
                    {...register("Descripcion")}
                    error={errors?.Descripcion?.message}
                />
                <div className='flex flex-col sm:flex-row gap-2 w-full'>
                    <Input 
                        inputName='CostoCompra'
                        color="purple"
                        labelContent='Precio de compra (Bs)'
                        placeholder='Ej: 10'
                        type='number'
                        step={0.01}
                        {...register("CostoCompra")}
                        error={errors?.CostoCompra?.message}
                    />
                    <Input 
                        inputName='CostoVenta'
                        color="purple"
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
                    selectName='IdSubcategoria'
                    defaultValue={data?.IdSubcategoria}
                    {...register("IdSubcategoria")}

                />

                <div className="flex flex-col sm:flex-row justify-end sm:items-center gap-3 mt-3">
                    <button
                        type="button"
                        className="p-2 w-full px-4 rounded-xl cursor-pointer font-paloseco-light text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors border border-gray-300 sm:border-none"
                        onClick={() => setState(false)}
                    >
                        Cerrar
                    </button>
                    <button
                        type="submit"
                        className="p-2 px-4 bg-rose-500 rounded-xl cursor-pointer font-paloseco-light text-white hover:bg-rose-600 transition-colors"
                    >
                        {patchLoading ? "Guardando cambios...": "Guardar Cambios"}
                    </button>
                </div>

            </form>
            
    )
}

export default UpdateProductModal