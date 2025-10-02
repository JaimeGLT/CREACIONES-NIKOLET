import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OfertasCard = () => {

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
                    <img className="h-full w-full object-cover" src="/categoria/vestidos.jpg" alt="Categoría vestidos" />
                    <img className="h-full w-full object-cover" src="/categoria/conjuntos.jpg" alt="Categoría conjuntos" />
                    <img className="h-full w-full object-cover" src="/categoria/blusas.jpg" alt="Categoría blusas" />
                    <img className="h-full w-full object-cover" src="/categoria/pantalones.jpg" alt="Categoría pantalones" />
                </Slider>
            </div>
        </div>
    )
}

export default OfertasCard