import '../styles/KeyData.scss'
import calorieIcon from '../assets/calories-icon.png'
import carbsIcon from '../assets/carbs-icon.png'
import fatIcon from '../assets/fat-icon.png'
import proteinIcon from '../assets/protein-icon.png'
import PropTypes from 'prop-types'


/**
 * Component for showing user key data button
 *
 * @namespace
 * 
 * @component
 * 
 * @example
 * 
 * const data = {calorieCount: 1930, proteinCount: 155, carbohydrateCount: 290, lipidCount: 50}
 * return (
 *  <KeyDataButton data={data} />
 * )
 * @returns {KeyData} Returns KeyData component
 */
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

KeyData.propTypes = {
    /**
     * Key button data
     */
    data: PropTypes.object.isRequired,
  }

export default KeyData