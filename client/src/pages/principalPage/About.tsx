const About = () => {
    return (
        <div className="flex flex-col mx-auto w-full bg-white max-w-[1200px] pt-15 pb-20">
            <div className=" tracking-widest text-center text-wrap ">
                <h2 className="flex font-hug-me text-secondary-purple items-center justify-center text-4xl tracking-widest mb-20">SOBRE NOSOTROS</h2>
                <p className="font-paloseco-light text-xl tracking-widest leading-relaxed">En Creaciones Nikolet nos especializamos en diseñar y ofrecer ropa exclusiva para niñas, con un estilo moderno, delicado y lleno de encanto. Nuestro compromiso es brindar prendas que no solo luzcan hermosas, sino que también sean cómodas, seguras y de alta calidad para acompañar cada momento especial de la infancia.</p>
            </div>

            <div className="flex mt-30 gap-20">
                <div className="bg-secondary-light rounded-3xl p-7 px-11 text-center w-[50%]">
                    <h3 className="text-center text-secondary-purple font-hug-me text-2xl tracking-[0.3rem]">MISIÓN</h3>
                    <div className="font-paloseco-light tracking-[0.2rem] mt-8 leading-normal space-y-1 text-sm text-wrap">
                        <p>En Creaciones Nikolet diseñamos ropa exclusiva para niñas, con estilo, comodidad y calidad.</p>
                        <p>Cada prenda refleja ternura, modernidad y seguridad en cada detalle.</p>
                        <p> Nuestra misión es que cada niña se sienta única, especial y feliz.</p>
                    </div>
                </div>
                <div className="bg-secondary-light rounded-3xl p-7 px-11 text-center w-[50%]">
                    <h3 className="text-center text-secondary-purple font-hug-me text-2xl tracking-[0.3rem] mt-2">VISIÓN</h3>
                    <div className="font-paloseco-light tracking-[0.2rem] mt-8 leading-normal space-y-1 text-sm text-wrap">
                        <p>Ser la marca líder en ropa infantil femenina en Cochabamba y Bolivia.</p>
                        <p>Destacarnos por diseños innovadores y excelencia en cada prenda.</p>
                        <p>Crear experiencias que unan moda, infancia y familia.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About