import '../styles/AverageSessionsGraph.scss'
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts'
import PropTypes from 'prop-types'

/**
 * Component for showing user average sessions using LineChart from recharts library
 *
 * @namespace
 * 
 * @see {@link https://recharts.org/en-US/api/LineChart} for further information on LineChart from recharts api
 * @component
 * 
 * @example
 * 
 * const data = [{day: 1, sessionLength: 30},...]
 * return (
 *  <AverageSessionsGraph data={data} />
 * )
 * @prop {Object[]} data required average sessions data
 * @prop {Number} data[].day session day
 * @prop {Number} data[].sessionLength session length
 * @returns {AverageSessionsGraph} Returns AverageSessionsGraph component
 */

const AverageSessionsGraph = ({ data }) => {
  const weekDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

    /**
   * Component for showing custom tooltip on this average sessions chart
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
            <p className="label">{`${payload[0].value} min`}</p>
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
    <div className="average-sessions-graph">
      <span>Durée moyenne des sessions</span>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="day"
            type="number"
            domain={[1, 7]}
            tickCount="7"
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => weekDays[value - 1]}
            tick={{ fill: 'white', fontSize: '12px' }}
            tickMargin={20}
          />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ outline: 'none' }}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            dot={false}
            stroke="#FFFFFF"
            strokeWidth={2}
            activeDot={{ r: 4 }}
            legendType="none"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

AverageSessionsGraph.propTypes = {
  /**
   * Average sessions data
   */
  data: PropTypes.array
}

export default AverageSessionsGraph
