import Input from '../../components/Input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from './LoginSchema'
import usePost from '../../hooks/postHook'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate =  useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(loginSchema)
    })

    const { loading, postData } = usePost("/Usuario/Login");

    const onSubmit = async (body: any) => {
        const dataToSend = {
            email: body.email.trim(),
            contraseña: body.contraseña.trim()
        }
        
        try {
            const response = await postData(dataToSend);
            localStorage.setItem('token', response.resultado.token);
            navigate("/")
            toast.success("Te damos la bienvenida " + response.resultado.usuario.nombreUsuario)
            
        } catch (error) {
            
            toast.error("Credenciales incorrectas")
        }

    }

    return (
        <div className='bg-gradient-to-b from-buttons-color to-[#8D555F]'>
            <div className='max-w-[1200px] w-[90%] sm:w-[60%] lg:w-[70%] mx-auto flex gap-5 h-auto lg:h-screen py-10'>
                <div className='w-[55%] h-[80%] my-auto hidden lg:block'>
                    <img className='bg-center bg-cover bg-no-repeat w-full h-full rounded-4xl' src="/images/login-img.jpg" alt="" />
                </div>
                <div className='bg-secondary-light w-full lg:w-[45%] h-[80%] my-auto rounded-4xl'>
                    <div className='w-[80%] mx-auto relative'>
                        <div className='flex flex-col mb-10 w-full'>
                            <img src="/logo.svg " className='w-40 sticky right-0 top-5' alt="" />
                            <h2 className='font-hug-me text-xl'>BIENVENIDA DE VUELTA</h2>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-10'>
                            <Input 
                                inputName='email'
                                labelContent='Email'
                                placeholder='Ingresa tu email'
                                {...register("email")}
                                error={errors?.email?.message}
                            />

                            <Input 
                                inputName='contraseña'
                                labelContent='Contraseña'
                                placeholder='Ingresa tu contraseña'
                                {...register("contraseña")}
                                error={errors?.contraseña?.message}
                            />


                            <div className='w-[80%] mx-auto flex flex-col gap-2'>
                                <button 
                                    className='bg-[#730054] w-full p-3 text-white font-paloseco-light rounded-4xl text-center cursor-pointer hover:bg-[#52033d]'
                                    disabled={loading}
                                >{loading ? "Cargando..." : "Iniciar sesión"}</button>
                                <span className='text-center text-xs text-paragraph'>O Iniciar sesión con</span>
                            </div>
                        </form>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login