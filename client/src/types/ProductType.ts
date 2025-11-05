export type ProductType = {
    id: number;
    costoVenta: number;
    descripcion: string;
    idSubcategoria: number;
    nombre: string;
    subcategoria: any;
    urlImagen: string;
}

export type EditProductType = {
    codigo: string;
    costoCompra?: number;
    costoVenta: number;
    descripcion?: string;
    idSubcategoria: number;
    nombre: string;
    stock?: number;
    // urlImagen: string;
}