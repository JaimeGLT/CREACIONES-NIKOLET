
const Contact = () => {
  return (
    <div className='bg-gradient-to-b from-primary to-secondary-light mt-6 py-15 flex justify-around'>
        <div className='md:max-w-[1200px] md:mx-auto flex flex-col md:flex-row justify-center md:justify-around px-5 md:px-[5%] xl:px-0'>
            <div className='w-[90%] md:w-[50%] xl:w-[60%] flex flex-col gap-10'>
                <div className='md:mr-[20%] flex flex-col'>
                    <h3 className='font-hug-me text-3xl pb-5'>CREACIONES NIKOLET</h3>
                    <p className='font-paloseco-light text-lg'>Creaciones Nikolet es una empresa dedicada a la venta por mayor enfocada en emprendedores que quieran invertir en nuestros productos para después revenderlos </p>
                </div>
                <div>
                    <h3 className='font-hug-me text-3xl pb-5'>COCHABAMBA</h3>
                    <p className='font-paloseco-light text-lg'>Av. Ayacucho / Calle Agustín López</p>
                    <p className='font-paloseco-light text-lg'>Acera Oeste, solo días de ferias.</p>
                    <p className='font-paloseco-light text-lg'>Miércoles y Sábados.</p>
                </div>
            </div>

            <div className='mt-10 md:mt-0 w-[90%] md:w-[50%] xl:w-[40%] flex flex-col md:items-center'>
                <div className='space-y-2'>
                    <h3 className='font-hug-me text-3xl pb-5'>CONTACTO</h3>
                    <p className='font-paloseco text-xl'>TELÉFONO: 74808807-68467148</p>
                    <p className='font-paloseco text-xl'>AYORISTAS: 63933986</p>
                    <p className='font-paloseco text-xl'>CREACIONES NIKOLET: 71761982</p>
                </div>

                <div className='mt-8'>
                    <p className='font-paloseco-light text-lg'>¿Necesita atención personalizada o quiere alguna información detallada de algún producto?</p>
                    <p className='font-paloseco-light text-lg text-wrap'>Contáctenos por nuestra dirección de </p>
                    <p className='font-paloseco-light text-lg text-wrap'>e-mail: <b>CreacionesNikolet@gmail.com</b></p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Contact