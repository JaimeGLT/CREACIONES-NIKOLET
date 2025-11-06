import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form'
import Input from '.././Input';
import toast from 'react-hot-toast';
import { updateSubcategoria } from '../../schema/subcategoriaSchema';
import usePatch from '../../hooks/patchHook';
import { getHook } from '../../hooks/getHook';
import { useEffect } from 'react';
import Select from '.././Select';
import Loading from '.././Loading';

interface CreateProductModalProps {
    setState: (state: boolean) => void;
    id: number;
    onUpdate: () => void;
}

const UpdateSubcategoriaModal = ({ setState, id, onUpdate }: CreateProductModalProps) => {

    const { data, loading } = getHook(`/SubCategorias/${id}`);
    const { loading: loadingPatch, patchData } = usePatch(`/SubCategorias/${id}`);
    const { data: categorias, loading: loadingCategorias } = getHook("/categorias");
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(updateSubcategoria),
        defaultValues: {
            nombre: '',
            categoriaId: 0
        }
    });

    useEffect(() => {
        if (data && !loading) {
            reset({ 
                nombre: data.nombre,
                categoriaId: data?.categoriaId
            });
        }
    }, [data, loading, reset]);

    const onSubmit = async (body: any) => {
        const dataToSend = {
            id: id,
            nombre: body.nombre,
            categoriaId: body.categoriaId
        };
        
        try {
            await patchData(dataToSend);
            if (onUpdate) onUpdate();
            setState(false);
            toast.success("Cambios guardados exitosamente");
        } catch (error) {
            toast.error("Ocurrió un error");
        }
    };

    if (loading || loadingCategorias) {
        return (
            <div className="flex justify-center items-center h-40">
                <Loading />
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-1'>
            <Input
                color="purple" 
                inputName='nombre'
                labelContent='Nombre'
                placeholder='Ej: Pantalones'
                {...register("nombre")}
                error={errors?.nombre?.message as string}
            />

            <Select 
                labelContent='Categoría'
                selectName='categoriaId'
                color='purple'
                defaultValue={data?.categoriaId ?? 0}   
                opts={categorias}   
                {...register("categoriaId")}
                error={errors?.categoriaId?.message}
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
                    disabled={loadingPatch}
                >
                    {loadingPatch ? "Guardando..." : "Guardar Cambios"}
                </button>
            </div>
        </form>
    );
};

export default UpdateSubcategoriaModal;
