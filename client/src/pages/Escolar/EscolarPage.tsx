import Card from '../../components/Card'
import SectionClothes from '../../components/SectionClothes'

const arrayTorender = [1,2,3,4,5,6,7,8,9]

const EscolarPage = () => {
    return (
        <div>
            <SectionClothes title='ESCOLAR'>
                {
                    arrayTorender.map(item => (
                        
                        <Card key={item}/>
                    ))
                }

            </SectionClothes>
        </div>
    )
}

export default EscolarPage