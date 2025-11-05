import z from "zod";

export const updateSubcategoria = z.object({
    nombre: z.string().min(1, "El nombre no puede estar vacío").max(30, "Máximo 30 carácteres"),
    categoriaId: z.coerce.number().min(1, "Debes seleccionar una categoria").max(30, "Máximo 30 carácteres")
})