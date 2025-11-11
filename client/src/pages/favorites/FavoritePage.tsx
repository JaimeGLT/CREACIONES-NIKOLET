import { useState } from "react";
import { getHook } from "../../hooks/getHook"
import Loading from "../../components/Loading";
import Card from "../../components/Card";
import type { ProductType } from "../../types/ProductType";
import axiosApi from "../../utils/axiosApi";
import toast from "react-hot-toast";

interface FavoritePageProps {
    roleUser: string | undefined;
}

const FavoritePage = ({ roleUser }: FavoritePageProps) => {

    const { data, loading, refetch } = getHook("/Favorito/ObtenerFavoritos");
    console.log(data);
    
    const [ currentProductId, setCurrentProductid ] = useState<number | null>(null);
       
    const showProductos = data?.length == 0 ? false : true;

    const deleteFromFavorites = async (id: number) => {
        try {
            await axiosApi.delete(`/Favorito/EliminarFavorito/${id}`);
            refetch();
            toast.success("Eliminado de favoritos");
        } catch (error) {
            toast.error("Ocurrió un error")
        }
    }

    return (
        <section className='w-full h-full'>
            <div className='h-20 sm:h-30 bg-primary w-full md:h-30 flex gap-2 items-center justify-center'>
                <h2 className='font-paloseco text-2xl sm:text-4xl md:text-6xl text-white text-center'>Favoritos</h2>
            </div>

            <div
                className={`w-full md:p-20 xl:p-30 px-4 py-20 md:py-30 xl:py-40 ${showProductos ? "grid" : "flex"} grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(257px,1fr))] gap-x-8 gap-y-10 md:gap-y-25 place-items-center `}
                style={{
                    background: `linear-gradient(
                        180deg,
                        rgba(246,178,190,0.2) 0%,
                        rgba(246,178,190,0.8) 25%,
                        rgba(246,178,190,1) 50%,
                        rgba(246,178,190,0.9) 70%,
                        rgba(246,178,190,0.2) 100%
                    )`,
                }}
            >
                {
                    loading ? <Loading /> 
                    : data?.length == 0 ? 
                        <div className="w-full flex items-center justify-center py-10">
                            <img
                                src="/img-no-favoritos-transparent.png"
                                alt="No hay favoritos disponibles"
                                className="max-w-[300px] w-full h-auto object-contain rounded-xl drop-shadow-md"
                            />
                        </div>
                    : data?.map((item: ProductType) => (
                        
                        <Card 
                            key={item.id}
                            id={item.id}
                            description={item.descripcion}
                            precio={item.costoVenta}
                            nombre={item.nombre}
                            url={item.urlImagen}
                            setCurrentProductId={setCurrentProductid}
                            roleUser={roleUser}
                            deleteFromFavorites={deleteFromFavorites}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default FavoritePage