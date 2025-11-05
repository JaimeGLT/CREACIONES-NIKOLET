import z from "zod";

export const createProduct = z.object({
    codigo: z.string().min(1, "El codigo es obligatorio").max(100, "Máximo 100 carácteres"),
    nombre: z.string().min(1, "El nombre es obligatorio").max(100, "Máximo 100 carácteres"),
    descripcion: z.string().max(200, "Máximo 200 carácteres").optional(),
    costoCompra: z.coerce.number().optional(),
    costoVenta: z.coerce.number().min(1, "El precio de venta no puede estar vacio"),
    stock: z.coerce.number().optional(),
    idSubcategoria: z.coerce.number().min(1, "Debes seleccionar almenos 1")
})