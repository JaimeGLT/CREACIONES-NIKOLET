import { useEffect, useState } from 'react'
import SectionClothes from '../../components/SectionClothes'
import Card from '../../components/Card'
import { useParams } from 'react-router-dom'
import { getHook } from '../../hooks/getHook';
import Modal from '../../components/Modal';
import CreateProductModal from '../../components/CreateProductModal';
import UpdateSubcategoriaModal from '../../components/UpdateSubcategoriaModal';
import type { ProductType } from '../../types/ProductType';
import Loading from '../../components/Loading';
import UpdateProductModal from '../../components/UpdateProductModal';

interface subCategoryInfo {
    title: string;
    id: number;
}

const SubCategoryPage = () => {

    const { category } = useParams<{category: string}>();
    const [ createState, setCreateState ] = useState<boolean>(false);
    const [ editTitleState, setEditTitleState ] = useState<boolean>(false);
    const [ editProductState, setEditProductState ] = useState<boolean>(false);
    const [ currentProductId, setCurrentProductid ] = useState<number | null>(null);

    const subCategoryInfo: Record<string, subCategoryInfo> = {
        colegial: { title: "ESCOLAR", id: 12 },
        fiesta: { title: "FIESTA", id: 14 },
        casual: { title: "CASUAL", id: 13 },
        vestidos: { title: "VESTIDOS", id: 5  },
        blusas: { title: "BLUSAS", id: 7 },
        pantalones: { title: "PANTALONES", id: 8  },
        conjuntos: { title: "CONJUNTOS", id: 6  }
    }

    const currentCategory = subCategoryInfo[category || ""] || {
        title: "Categoria no encontrada"
    };

    const { data, loading, refetch: refetchProducts } = getHook("/Productos/GetProductosPorSubcategoria/"+currentCategory.id);
    const { data: subCategoria, refetch } = getHook("/SubCategorias/" + currentCategory.id);
        
    return (
        <div>
            <SectionClothes 
                title={loading ? <Loading /> : subCategoria?.nombre}
                setEditTitleState={setEditTitleState}
                setState={setCreateState}
            >
                {
                    loading ? <Loading /> : data?.map((item: ProductType) => (
                        
                        <Card 
                            key={item.id}
                            id={item.id}
                            description={item.descripcion}
                            setState={setEditProductState}
                            precio={item.costoVenta}
                            nombre={item.nombre}
                            url={"/images/pantalon.jpg"}
                            setCurrentProductId={setCurrentProductid}
                        />
                    ))
                }

            </SectionClothes>

            <Modal
                state={createState}
                setState={setCreateState}
                title='Agregar Producto'
                description='Completa los datos del producto que deseas agregar'
            >
                <CreateProductModal 
                    id={currentCategory.id}
                    setState={setCreateState}
                    onUpdate={refetchProducts}
                />
            </Modal>

            <Modal
                state={editTitleState}
                setState={setEditTitleState}
                title='Modificar Subcategoría'
                description='Cambia el nombre o reasigna a otra categoría'
            >
                <UpdateSubcategoriaModal
                    id={currentCategory.id} 
                    setState={setEditTitleState}
                    onUpdate={refetch}
                />
            </Modal>

            <Modal
                state={editProductState}
                setState={setEditProductState}
                title='Editar Producto '
                description='Actualiza la información de la subcategoría'
            >
                <UpdateProductModal
                    id={currentProductId} 
                    setState={setEditProductState}
                    onUpdate={refetchProducts}
                />
            </Modal>

        </div>
    )
}

export default SubCategoryPage