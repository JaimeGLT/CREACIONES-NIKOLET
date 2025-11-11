import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import usePost from "../../hooks/postHook";
import { createUser } from "./RegisterSchema";
import Input from "../../components/Input";

const RegisterPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createUser),
  });

  const { loading, postData } = usePost("/Usuario/Registro");

  const onSubmit = async (body: any) => {
    const dataToSend = {
      nombreUsuario: body.nombreUsuario.trim(),
      nombre: body.nombre.trim(),
      email: body.email.trim(),
      contraseña: body.contraseña.trim(),
    };

    try {
      await postData(dataToSend);
      navigate("/mi-cuenta");
      toast.success("Registro completado exitosamente");
    } catch (error) {
      toast.error("Hubo un problema al crear su cuenta");
    }
  };

  return (
    <div className="bg-gradient-to-b from-buttons-color to-[#8D555F] min-h-screen flex items-center justify-center py-10">
      <div className="max-w-[1200px] w-[90%] sm:w-[80%] lg:w-[70%] flex flex-col lg:flex-row gap-5">
        
        {/* Panel lateral (solo en escritorio) */}
        <div className="relative w-full lg:w-[35%] min-h-[400px] rounded-4xl bg-gradient-to-tr from-purple-600 to-pink-400 overflow-hidden lg:flex items-center justify-center hidden">
          <div className="absolute top-10 left-10 w-24 h-24 bg-white opacity-40 rounded-full animate-ball-move-1"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white opacity-30 rounded-full animate-ball-move-2"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full animate-ball-move-3 blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
          <h2 className="text-white font-bold text-2xl lg:text-3xl z-10 text-center px-4 drop-shadow-md">
            ¡Bienvenida al registro!
          </h2>
        </div>

        {/* Formulario con burbujas en móviles */}
        <div className="relative w-full lg:w-[65%] bg-secondary-light rounded-4xl p-8 flex flex-col justify-center overflow-hidden">
          {/* Burbujas decorativas solo visibles en móvil */}
          <div className="absolute inset-0 lg:hidden">
            <div className="absolute top-5 left-5 w-20 h-20 bg-pink-300 opacity-40 rounded-full animate-ball-move-1"></div>
            <div className="absolute bottom-8 right-6 w-24 h-24 bg-purple-400 opacity-30 rounded-full animate-ball-move-2"></div>
            <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-white opacity-20 rounded-full animate-ball-move-3 blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center mb-8">
            <img src="/logo.svg" className="w-36 mb-4 animate-bounceSlow" alt="Logo" />
            <h2 className="font-hug-me text-xl text-center">CREA TU CUENTA</h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 flex flex-col gap-4">
            <Input
              inputName="nombreUsuario"
              labelContent="Nombre de Usuario"
              placeholder="Ej: Sisi"
              {...register("nombreUsuario")}
              error={errors?.nombreUsuario?.message}
            />

            <Input
              inputName="nombre"
              labelContent="Nombre"
              placeholder="Ingresa tu nombre"
              {...register("nombre")}
              error={errors?.nombre?.message}
            />

            <Input
              inputName="email"
              labelContent="Email"
              placeholder="Ej: tucorreo@ejemplo.com"
              {...register("email")}
              error={errors?.email?.message}
            />

            <Input
              inputName="contraseña"
              labelContent="Contraseña"
              placeholder="· · · · · · · ·"
              type="password"
              {...register("contraseña")}
              error={errors?.contraseña?.message}
            />

            <button
              type="submit"
              className="bg-[#730054] w-full p-3 text-white font-paloseco-light rounded-4xl text-center cursor-pointer hover:bg-[#52033d]"
              disabled={loading}
            >
              {loading ? "Cargando..." : "Crear Cuenta"}
            </button>

            <span className="text-center text-xs text-paragraph mt-2">
              O Iniciar sesión con
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
