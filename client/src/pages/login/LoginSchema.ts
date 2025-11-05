import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Debes introducir un email válido")
    .max(250, "Máximo 250 caracteres")
    .email("Formato de email inválido"),
  contraseña: z
    .string()
    .min(6, "Mínimo 6 caracteres")
    .max(250, "Máximo 250 caracteres"),
});
