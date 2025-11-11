import z from "zod";

export const updatePromoSchema = z.object({
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
    estado: z.preprocess(
  (val) => {
    if (val === "true") return true;
    if (val === "false") return false;
    return val;
  },
  z.boolean()
)
})

export const createPromoSchema = z.object({
    Imagen: z
    .any()
    .refine((files) => files?.length > 0, "Debe seleccionar una imagen")
    .refine((files) => files?.[0]?.size <= 10 * 1024 * 1024, "La imagen debe ser menor a 10 MB")
    .refine((files) => ["image/jpeg", "image/png", "image/webp"].includes(files?.[0]?.type), "Formato no válido (solo JPG, PNG o WEBP)"),
    estado: z.preprocess(
    (val) => {
        if (val === "true") return true;
        if (val === "false") return false;
        return val;
    },
    z.boolean()
    )
})