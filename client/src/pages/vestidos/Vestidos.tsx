import SectionClothes from '../../components/SectionClothes'
import Card from '../../components/Card'

const Vestidos = () => {

    const arrayTorender = [1,2,3,4,5,6,7,8,9];

    return (
        <div>
            <SectionClothes title='VESTIDOS'>
                {
                    arrayTorender.map(item => (
                        
                        <Card 
                            key={item}
                            url={`/images/vestido.jpg`}
                        />
                    ))
                }

            </SectionClothes>

        </div>
    )
}

export default Vestidos