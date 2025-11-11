import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Ellipsis, Plus } from "lucide-react";
import Modal from "../../../components/Modal";
import PromosUpdateModal from "./PromosUpdateModal";
import { useState } from "react";
import { getHook } from "../../../hooks/getHook";
import PromosCreateModal from "./PromosCreateModal";
import Loading from "../../../components/Loading";

interface PromosCardProps {
    userRole: string | undefined;
}

const PromosCard = ({ userRole }: PromosCardProps) => {

    const [ updateStateModal, setUpdateStateModal ] = useState<boolean>(false);
    const [ createStateModal, setCreateStateModal ] = useState<boolean>(false);
    const [ selectedId, setSelectedId ] = useState<number | null>(null);
    const { data: promociones, refetch, loading } = getHook(`/Promocion/${userRole === "Admin" ? "GetPromocionAdmin" : "PromocionesActivas"}`);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        accessibility: true,
        beforeChange: () => {
            const focused = document.activeElement as HTMLElement;
            if (focused && focused !== document.body) focused.blur();
        },
    };


    return (
        <div className='md:max-w-[1200px] xl:mx-auto xl:my-30 bg-white h-full w-full md:py-0 relative'>
            {
                userRole === "Admin" ? 
                    <div className="absolute z-50 top-8 right-8 bg-white rounded-full border cursor-pointer hover:bg-purple-300 border-purple-300 p-2"
                        onClick={() => setCreateStateModal(true)}
                    >
                        <Plus className="size-10"/>
                    </div> : ""
            }
            <div className="h-auto w-full items-center relative">
                {
                    loading ? <Loading /> : 
                        <Slider {...settings}>
                            {
                                promociones?.map((promocion: any) => (
                                    <div className="relative w-full h-full" key={promocion?.id}>
                                        {userRole === "Admin" && (
                                            <div
                                                className="absolute left-8 top-8 rounded-full p-2 flex items-center justify-center cursor-pointer bg-white hover:bg-purple-300"
                                                title="Editar Promoción"
                                                onClick={() => {
                                                    setSelectedId(promocion?.id);
                                                    setUpdateStateModal(true);
                                                }}
                                            >
                                                <Ellipsis className="size-8" />
                                            </div>
                                        )}
                                        <img className="h-full w-full object-cover" src={promocion?.url} alt="Promocion" />
                                    </div>
                                ))

                            }
                        </Slider>
                }

                <Modal
                    state={updateStateModal}
                    setState={setUpdateStateModal}
                    title="Actualizar Promoción"
                    description="Cambia la imagen o estado de la promoción"
                >
                    <PromosUpdateModal 
                        setState={setUpdateStateModal}
                        onUpdate={refetch}
                        id={selectedId}
                    />
                </Modal>

                <Modal
                    state={createStateModal}
                    setState={setCreateStateModal}
                    title="Añadir Nueva Promoción"
                    description="Crea una nueva promoción"
                >
                    <PromosCreateModal 
                        setState={setCreateStateModal}
                        onUpdate={refetch}
                    />
                </Modal>
            </div>
        </div>
    )
}

export default PromosCard