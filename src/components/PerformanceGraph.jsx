import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip
} from 'recharts'
import '../styles/PerformanceGraph.scss'
import PropTypes from 'prop-types'


/**
 * Component for showing user performance using RadarChart from recharts library
 *
 * @namespace
 * 
 * @see {@link https://recharts.org/en-US/api/RadarChart} for further information on RadarChart from recharts api
 * @component
 * 
 * @example
 * 
 * const data = {
 *  userId: 12,
 *  data: [ { value:80, kind: 1 },...]
 *  kind: { 1:'cardio', 2:'energy', 3:'endurance', 4:'strength', 5:'speed', 6:'intensity' }
 * }
 * return (
 *  <PerformanceGraph data={data} />
 * )
 * @prop {Object} data required performance data
 * @prop {number} data.userId user id
 * @prop {Object[]} data.data performance data
 * @prop {Object} data.kind performance kind
 * @returns {PerformanceGraph} Returns PerformanceGraph component
 */
const PerformanceGraph = ({ data }) => {
  const dataKind = {
    1: { name: 'Cardio', order: 6 },
    2: { name: 'Energie', order: 5 },
    3: { name: 'Endurance', order: 4 },
    4: { name: 'Force', order: 3 },
    5: { name: 'Vitesse', order: 2 },
    6: { name: 'Intensité', order: 1 },
  }
  const dataFiltered = data.map((item) => {
    const kind = dataKind[item.kind]
    return {...item, ...kind}
  }).sort((a, b) => (a.order < b.order ? -1 : 1))

  /**
   * Component for showing custom tooltip on performance chart
   *
   * @component

   * @prop {Bool} active
   * @prop {Array} payload
   * @returns {(null | CustomTooltip)}

   */
     const CustomTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
        return (
          <div
            className="custom-tooltip"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#000000',
              fontSize: '8px',
              fontWeight: '500',
              textAlign: 'center',
              lineHeight: '24px',
              fontStyle: 'normal',
              width: '39px',
              height: '25px',
              borderColor: 'transparent',
            }}
          >
            <p className="label">{`${payload[0].value}`}</p>
          </div>
        )
      }
  
      return null
    }

  CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
  }

  return (
    <div className="performance-graph">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={75} width={300} height={300} data={dataFiltered}>
          <PolarGrid radialLines={false}/>
          <PolarAngleAxis
            dataKey="kind"
            tickFormatter={(value) => dataKind[value].name}
            tick={{ fill: 'white', fontSize: '12px' }}
          />
          <Radar stroke='#FF0101B2' fill='#FF0101B2' dataKey="value" />
          <Tooltip
          content={<CustomTooltip />}
          wrapperStyle={{ outline: 'none' }}
        />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

PerformanceGraph.propTypes = {
  /**
   * PerformanceGraph data
   */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default PerformanceGraph
