import '../styles/KeyData.scss'
import calorieIcon from '../assets/calories-icon.png'
import carbsIcon from '../assets/carbs-icon.png'
import fatIcon from '../assets/fat-icon.png'
import proteinIcon from '../assets/protein-icon.png'

const KeyData = ({data}) => {
    return (
        <div className="keydata">
            <div className='keydata-container'>
                <img src={calorieIcon} alt="icon calories brulées" />
                <div>
                    <span>{data.calorieCount} Kcal</span>
                    <span>Calories</span>
                </div>
            </div>
            <div className='keydata-container'>
                <img src={carbsIcon} alt="icon calories brulées" />
                <div>
                    <span>{data.proteinCount}g</span>
                    <span>Proteines</span>
                </div>
            </div>
            <div className='keydata-container'>
                <img src={fatIcon} alt="icon calories brulées" />
                <div>
                    <span>{data.carbohydrateCount}g</span>
                    <span>Glucides</span>
                </div>
            </div>
            <div className='keydata-container'>
                <img src={proteinIcon} alt="icon calories brulées" />
                <div>
                    <span>{data.lipidCount}g</span>
                    <span>Lipides</span>
                </div>
            </div>
        </div>
    )
}

export default KeyData