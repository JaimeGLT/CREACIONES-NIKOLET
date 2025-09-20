

const FrontPage = () => {
    return (
        <div className="relative w-full h-full overflow-hidden">
            <img className="absolute inset-0 h-[100vh] w-full object-cover -z-10" src="/background-portada.svg" alt="" />
            <div className="flex w-full h-[100vh]">
                <div className="flex items-center justify-center w-[55%]">
                    <img className="w-250 h-auto block" src={"/logo.svg"} alt="logo de creaciones nikolet" />
                </div>
                <div className="flex items-center justify-center w-[40%] -ml-10">
                    <div className="w-[30vw] max-w-[700px] h-[75%] -mt-20 border-30 border-white rounded-t-full">
                        <div className="w-full h-full border-16 border-b-0 border-secondary-light rounded-t-full overflow-hidden">
                            <img src={"/images/foto-portada.jpg"} className="w-full h-full object-cover" alt="" />
                            <div className="z-20 absolute -bottom-[15vh] right-[10vw] flex overflow-hidden">
                                    <img
                                        src="/cloud-left.svg"
                                        className="w-[33vw] -mt-[10vh] -mr-24"
                                        alt="Nube izquierda"
                                            />
                                    <img
                                        src="/cloud-right.svg"
                                        className="w-[30vw]"
                                        alt="Nube derecha"
                                    />
                                </div>
                        </div>
                    </div>
                </div>
            </div>

                <div className="absolute ">

                </div>

        </div>
    )
}

export default FrontPage