import PromosCard from './components/PromosCard'
import TitleSectionPromos from './components/TitleSectionPromos'

interface PromosProps {
    userRole: string | undefined
}

const Promos = ({ userRole }: PromosProps) => {
    return (
        <>
            <TitleSectionPromos title='PROMOS Y DESCUENTOS'>
                <PromosCard 
                    userRole={userRole}
                />
            </TitleSectionPromos>
        </>
    )
}

export default Promos