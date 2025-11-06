import toast from "react-hot-toast";
import useDelete from "../../hooks/deleteHook";

interface DeleteProductModalProps {
    id: number | null;
    onUpdate: () => void;
    setState: (state: boolean) => void;
}

const DeleteProductModal = ({ onUpdate, setState, id }: DeleteProductModalProps) => {
    
    const { loading, deleteData } = useDelete(`/Productos/${id}`);

    
    const onSubmit = async () => {
        try {
            await deleteData();
            setState(false);
            onUpdate();
            toast.success("Producto eliminado correctamente")
        } catch (error) {
            toast.error("Ocurrió un error");
        }
    };

    return (
        <div className='flex gap-4 justify-center items-center w-full'>
            <button 
                className="bg-gray-200 p-2 px-4 rounded-xl cursor-pointer text-black font-paloseco hover:bg-gray-400 hover:text-white"
                onClick={() => setState && setState(false)}
            >Cancelar</button>
            <button 
                className="bg-rose-600 p-2 px-4 rounded-xl cursor-pointer text-white font-paloseco hover:bg-rose-700"
                onClick={() => onSubmit()}
            >{loading ? "Eliminando..." : "Confirmar"}</button>
        </div>
    )
}

export default DeleteProductModal