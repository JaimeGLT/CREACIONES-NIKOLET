import z from "zod";

export const createProduct = z.object({
    codigo: z.string().min(1, "El codigo es obligatorio").max(100, "Máximo 100 carácteres"),
    Nombre: z.string().min(1, "El nombre es obligatorio").max(100, "Máximo 100 carácteres"),
    Descripcion: z.string().min(1, "Introduce una descripcion corta").max(200, "Máximo 200 carácteres"),
    CostoCompra: z.coerce.number().optional(),
    CostoVenta: z.coerce.number().min(1, "El precio de venta no puede estar vacio"),
    stock: z.coerce.number(),
    IdSubcategoria : z.coerce.number().min(1, "Debes seleccionar almenos 1"),
    Imagen: z
    .any()
    .refine((files) => files?.length > 0, "Debe seleccionar una imagen")
    .refine((files) => files?.[0]?.size <= 10 * 1024 * 1024, "La imagen debe ser menor a 10 MB")
    .refine((files) => ["image/jpeg", "image/png", "image/webp"].includes(files?.[0]?.type), "Formato no válido (solo JPG, PNG o WEBP)")
})


export const updateProduct = z.object({
    codigo: z.string().min(1, "El codigo es obligatorio").max(100, "Máximo 100 carácteres"),
    Nombre: z.string().min(1, "El nombre es obligatorio").max(100, "Máximo 100 carácteres"),
    Descripcion: z.string().min(1, "Introduce una descripcion corta").max(200, "Máximo 200 carácteres"),
    CostoCompra: z.coerce.number().optional(),
    CostoVenta: z.coerce.number().min(1, "El precio de venta no puede estar vacio"),
    stock: z.coerce.number(),
    IdSubcategoria : z.coerce.number().min(1, "Debes seleccionar almenos 1"),
    Imagen: z
        .any()
        .optional()
        .refine(
        (files) => {
            if (!files || files.length === 0) return true; // si no sube imagen, ok
            return files[0].size <= 10 * 1024 * 1024; // <= 10 MB
        },
        "La imagen debe ser menor a 10 MB"
        )
        .refine(
        (files) => {
            if (!files || files.length === 0) return true;
            return ["image/jpeg", "image/png", "image/webp"].includes(files[0].type);
        },
        "Formato no válido (solo JPG, PNG o WEBP)"
        ),
})