import { useForm } from "react-hook-form"
import Input from "../../components/Input"
import usePost from "../../hooks/postHook";

const ProfilePage = () => {
  const { register: registerDatos, handleSubmit: handleSubmitDatosPersonales, formState: { errors: erroresDatos } } = useForm();
  const { register: registerPass, handleSubmit: handleSubmitContraseña, formState: { errors: erroresPass } } = useForm();

  const { loading: loadingDetails } = usePost("/");

  const onSubmitDetails = () => { }
  const onSubmitPassword = () => { }

  return (
    <div className="p-5">
      <h2 className="text-center font-semibold text-3xl font-hug-me my-5">CONFIGURACIÓN DE LA CUENTA</h2>
      <div className="flex w-full gap-5 max-w-[1200px] mx-auto mb-5">

        <form
            onSubmit={handleSubmitDatosPersonales(onSubmitDetails)}
            className="w-1/2 p-8 rounded-3xl shadow-lg shadow-pink-200/40 border border-pink-200
                    bg-gradient-to-br from-pink-100 via-white to-pink-200
                    transition-all duration-300 hover:shadow-pink-300/60"
        >
            <h2 className="font-semibold text-lg mb-4 text-[#730054] font-hug-me">DETALLES PERSONALES</h2>

            <div className="space-y-3">
            <Input
                inputName="nombreUsuario"
                labelContent="Nombre de Usuario"
                {...registerDatos("nombreUsuario")}
                error={erroresDatos?.nombreUsuario?.message as string}
            />
            <Input
                inputName="nombre"
                labelContent="Nombre"
                {...registerDatos("nombre")}
                error={erroresDatos?.nombre?.message as string}
            />
            <Input
                inputName="email"
                labelContent="Correo Electrónico"
                {...registerDatos("email")}
                error={erroresDatos?.email?.message as string}
            />
            </div>

            <button
            className="mt-5 bg-[#730054] w-full p-3 text-white font-paloseco-light rounded-4xl text-center cursor-pointer hover:bg-[#52033d] active:scale-95 transition-all duration-300 ease-out"
            disabled={loadingDetails}
            >
            {loadingDetails ? "Cargando..." : "Guardar Cambios"}
            </button>
        </form>

        {/* --- Formulario de Cambio de Contraseña --- */}
        <form
            onSubmit={handleSubmitContraseña(onSubmitPassword)}
            className="w-1/2 p-8 rounded-3xl shadow-lg shadow-purple-200/40 border border-purple-200
                    bg-gradient-to-bl from-purple-100 via-white to-pink-100
                    transition-all duration-300 hover:shadow-purple-300/60"
        >
            <h2 className="font-semibold text-lg mb-4 text-[#730054] font-hug-me">SEGURIDAD DE CONTRASEÑA</h2>

            <div className="space-y-3">
            <Input
                inputName="contraseñaActual"
                labelContent="Contraseña Actual"
                {...registerPass("contraseñaActual")}
                error={erroresPass?.contraseñaActual?.message as string}
            />
            <Input
                inputName="nuevaContraseña"
                labelContent="Nueva Contraseña"
                {...registerPass("nuevaContraseña")}
                error={erroresPass?.nuevaContraseña?.message as string}
            />
            <Input
                inputName="confirmarContraseña"
                labelContent="Confirmar Contraseña"
                {...registerPass("confirmarContraseña")}
                error={erroresPass?.confirmarContraseña?.message as string}
            />
            </div>

            <button
            className="mt-5 bg-[#730054] w-full p-3 text-white font-paloseco-light rounded-4xl text-center cursor-pointer hover:bg-[#52033d] active:scale-95 transition-all duration-300 ease-out"
            disabled={loadingDetails}
            >
            {loadingDetails ? "Cargando..." : "Actualizar Contraseña"}
            </button>
        </form>
        </div>
      </div>
  )
}

export default ProfilePage
