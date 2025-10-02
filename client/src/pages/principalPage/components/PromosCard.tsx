import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PromosCard = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };

    return (
        <div className='md:max-w-[1200px] xl:mx-auto xl:my-30 bg-white h-full w-full md:py-0'>
            <div className="h-auto w-full items-center">
                <Slider {...settings}>
                    <img className="h-full w-full object-cover" src="/promos/promos-1.jpg" alt="Promocion 2x1 en vestidos" />
                    <img className="h-full w-full object-cover" src="/promos/descuento-primavera.jpg" alt="Descuento por primavera" />
                    <img className="h-full w-full object-cover" src="/promos/descuento-verano.jpg" alt="Descuento por verano" />
                    <img className="h-full w-full object-cover" src="/promos/promocion-vestidos.jpg" alt="Promoción de vestidos" />
                    <img className="h-full w-full object-cover" src="/promos/coleccion-invierno.jpg" alt="Promoción coleccion de invierno" />
                    <img className="h-full w-full object-cover" src="/promos/coleccion-verano.jpg" alt="Promoción coleccion de verano" />
                </Slider>
            </div>
        </div>
    )
}

export default PromosCard