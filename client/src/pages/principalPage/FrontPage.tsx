

const FrontPage = () => {
    return (
        <div className="relative w-full h-full overflow-hidden">
            <img className="absolute inset-0 h-[calc(100vh-132px)]  xl:h-[100vh] w-full object-cover -z-10" src="/background-portada.svg" alt="" />
            <div className="flex w-full h-[calc(100vh-132px)] xl:h-[100vh] flex-col items-center xl:flex-row">
                <div className="flex items-center justify-center w-screen xl:w-[55%]">
                    <img className="w-600 md:w-150 xl:w-250 h-auto block" src={"/logo.svg"} alt="logo de creaciones nikolet" />
                </div>
                <div className="flex items-center h-full min-h-100 justify-center w-[80%] xl:w-[40%] xl:-ml-10">
                    <div className="w-[60vw] md:w-[40vw] xl:w-[30vw] max-w-[700px] h-[75%] -mt-20 border-14 xl:border-30 border-white rounded-t-full">
                        <div className="w-full h-full border-8 xl:border-16 border-b-0 border-secondary-light rounded-t-full overflow-hidden">
                            <img src={"/images/foto-portada.jpg"} className="w-full h-full object-cover " alt="" />
                            <div className="z-20 absolute -bottom-[40vw] md:-bottom-[25vw] xl:-bottom-[12vw] right-[10vw] flex ">
                                    <img
                                        src="/cloud-left.svg"
                                        className="w-[50vw] xl:w-[33vw] -mt-[10vh] -mr-24"
                                        alt="Nube izquierda"
                                            />
                                    <img
                                        src="/cloud-right.svg"
                                        className="z-100 w-[75vw] md:w-[100vw] xl:w-[36vw]"
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