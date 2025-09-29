import React from 'react'
import SectionClothes from '../../components/SectionClothes'
import Card from '../../components/Card'

const Fiesta = () => {

    const arrayTorender = [1,2,3,4,5,6,7,8,9];

    return (
        <div>
            <SectionClothes title='FIESTA'>
                {
                    arrayTorender.map(item => (
                        
                        <Card 
                            key={item}
                            url={"/images/fiesta.jpg"}
                        />
                    ))
                }

            </SectionClothes>

        </div>
    )
}

export default Fiesta