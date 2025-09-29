import SectionClothes from '../../components/SectionClothes'
import Card from '../../components/Card'

const Conjuntos = () => {

    const arrayTorender = [1,2,3,4,5,6,7,8,9];

    return (
        <div>
            <SectionClothes title='CONJUNTOS'>
                {
                    arrayTorender.map(item => (
                        
                        <Card 
                            key={item}
                            url={"/images/conjunto.jpg"}
                        />
                    ))
                }

            </SectionClothes>

        </div>
    )
}

export default Conjuntos