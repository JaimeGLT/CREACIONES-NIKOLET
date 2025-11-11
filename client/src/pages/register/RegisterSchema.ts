import z from "zod";

export const createUser = z.object({
    nombreUsuario: z.string().min(3, "Mínimo 3 carácteres").max(10, "Máximo 10 carácteres"),
    nombre: z.string().min(1, "Debes introducir tu nombre").max(250, "Máximo 250 carácteres"),
    email: z.email({error: "Correo electrónico inválido"}).min(1, "Debes introducir tu email").max(250, "Máximo 250 carácteres"),
    contraseña: z.string().min(4, "La contraseña debe tener almenos 4 carácteres").max(200, "Máximo 200 carácteres")
})