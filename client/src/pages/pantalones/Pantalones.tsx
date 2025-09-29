import SectionClothes from '../../components/SectionClothes'
import Card from '../../components/Card'

const Pantalones = () => {

    const arrayTorender = [1,2,3,4,5,6,7,8,9];

    return (
        <div>
            <SectionClothes title='PANTALONES'>
                {
                    arrayTorender.map(item => (
                        
                        <Card 
                            key={item}
                            url={"/images/pantalon.jpg"}
                        />
                    ))
                }

            </SectionClothes>

        </div>
    )
}

export default Pantalones