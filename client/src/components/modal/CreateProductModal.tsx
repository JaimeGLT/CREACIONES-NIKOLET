import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form'
import { createProduct } from '../../schema/productSchema';
import Input from '.././Input';
import usePost from '../../hooks/postHook';
import toast from 'react-hot-toast';
import Select from '.././Select';
import { getHook } from '../../hooks/getHook';
import { useEffect, useState } from 'react';
import { ImagePlus, Trash2 } from 'lucide-react';

interface CreateProductModalProps {
    setState: (state: boolean) => void;
    id: number;
    onUpdate: () => void;
}

const CreateProductModal = ({ setState, id, onUpdate }: CreateProductModalProps) => {

    const [preview, setPreview] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(createProduct)
    });

    const { data, loading, postData } = usePost("/Productos");
    const { data: subCategorias } = getHook("/SubCategorias");

    useEffect(() => {
        reset({
            IdSubcategoria: id
        })
    }, [reset, subCategorias]) 

    const onSubmit = async (body: any) => {

        const file = body.Imagen?.[0]

        const formData = new FormData();
        formData.append("Codigo", body.codigo);
        formData.append("Nombre", body.Nombre);
        formData.append("Descripcion", body.Descripcion || "");
        formData.append("CostoCompra", body.CostoCompra || 0);
        formData.append("CostoVenta", body.CostoVenta);
        formData.append("Stock", body.stock || 0);
        formData.append("IdSubcategoria", body.IdSubcategoria);
        formData.append("Imagen", file);
        
        try {
            await postData(formData);
            onUpdate();
            setState(false);
            toast.success("Producto agregado con éxito");
            
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
                    labelContent='Descripctión'
                    placeholder='Ej: Pantalones licra con refuerzo de neopreno'
                    {...register("Descripcion")}
                    error={errors?.Descripcion?.message}
                />
                <div className='flex gap-2 w-full'>
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
                    selectName='IdSubcategoria '
                    defaultValue={data?.IdSubcategoria }
                    {...register("IdSubcategoria")}

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
                        {loading ? "Añadiendo Producto..." : "Añadir Producto"}
                    </button>
                </div>

            </form>
    )
}

export default CreateProductModal