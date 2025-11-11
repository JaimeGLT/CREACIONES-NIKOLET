import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import usePatch from '../../../hooks/patchHook';
import { getHook } from '../../../hooks/getHook';
import { zodResolver } from '@hookform/resolvers/zod';
import { updatePromoSchema } from '../schema/promoSchema';
import { ImagePlus, Trash2 } from 'lucide-react';
import Select from '../../../components/Select';
import type { PromotionType } from '../../../types/PromotionType';
import toast from 'react-hot-toast';
import Loading from '../../../components/Loading';

interface PromosUpdateModalProps {
    id: number | null;
    setState: (state: boolean) => void;
    onUpdate: () => void;
}

const PromosUpdateModal = ({ id, setState, onUpdate }: PromosUpdateModalProps) => {

    const { data, loading } = getHook(`/Promocion/GetPromocionPorId/${id}`);
    const { patchData, loading: patchLoading } = usePatch(`/Promocion/ActualizarPromocion/${id}`);
    const [preview, setPreview] = useState<string | null>(null);

    const { 
        register,
        handleSubmit,
        formState: { errors },
        reset 
    } = useForm({
        resolver: zodResolver(updatePromoSchema),
        defaultValues: {
            Imagen: "",
            estado: undefined,
        }
    });
    
    
    useEffect(() => {
        console.log(data);
        
        if (data && !loading) {
            reset({
                Imagen: undefined,
                estado: data.estado
            });

            if (data.url) 
                setPreview(data.url);
            
        }
    }, [data, loading, reset]);

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

    const onSubmit = async (body: PromotionType) => {

        const file = body.Imagen?.[0]

        const formData = new FormData();
        formData.append("id", String(id));
        if (file) {
            formData.append("Imagen", file);
        }
        formData.append("estado", String(body.estado));

        try {
            await patchData(formData);
            onUpdate();
            setState(false);
            toast.success("Promoción actualiza con éxito");

        } catch (error) {
            toast.error("Ocurrió un error");
        }

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
                {
                    !data ? <Loading /> : (
                        <>
                        <div className="flex flex-col w-full mb-5">
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

                        <Select 
                            labelContent='Estado'
                            opts={[{value: true, nombre: "Activo"}, {value: false, nombre: "Inactivo"}]}
                            selectName='estado'
                            color='Purple'
                            {...register("estado")}
                            error={errors?.estado?.message}
                        />

                        <div className="flex flex-col sm:flex-row justify-end sm:items-center gap-3 mt-3">
                            <button
                                type="button"
                                className="p-2 w-full sm:w-fit px-4 rounded-xl cursor-pointer font-paloseco-light text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors border border-gray-300 sm:border-none"
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
                        </>
                    )
                }
            
        </form>
    )
}

export default PromosUpdateModal