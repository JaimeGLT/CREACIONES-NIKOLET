import SectionClothes from '../../components/SectionClothes'
import Card from '../../components/Card'
import { useState } from 'react';
import Modal from '../../components/Modal';
import CreateProductModal from '../../components/CreateProductModal';

const Vestidos = () => {

    const [ createState, setCreateState ] = useState<boolean>(false);

    const arrayTorender = [1,2,3,4,5,6,7,8,9];
    console.log(createState);
    
    return (
        <div>
            <SectionClothes title='VESTIDOS' setState={setCreateState}>
                <Modal
                    state={createState}
                    setState={setCreateState}
                    title='Añadir un Nuevo Producto'
                    description='Ingresa los datos del producto'
                >
                    <CreateProductModal 
                        setState={setCreateState}
                    />
                </Modal>
                {
                    arrayTorender.map(item => (
                        <Card 
                            key={item}
                            url={`/images/vestido.jpg`}
                            setState={setCreateState}
                        />
                    ))
                }

            </SectionClothes>

        </div>
    )
}

export default Vestidos