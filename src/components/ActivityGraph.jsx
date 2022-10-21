import '../styles/ActivityGraph.scss'
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts'
import PropTypes from 'prop-types'

/**
 * Component for showing user activity using BarChart from recharts library
 *
 * @namespace
 * 
 * @see {@link https://recharts.org/en-US/api/BarChart} for further information on BarChart from recharts api
 * @component
 * 
 * @example
 * 
 * const data = [{day:"2020-07-01", kilogram: 80, calories:240},...]
 * return (
 *  <ActivityGraph data={data} />
 * )
 * @prop {Object[]} data required actvity sessions
 * @prop {String} data[].day session day
 * @prop {Number} data[].kilogram session kilogram
 * @prop {String} data[].calories session calories
 * @returns {ActivityGraph} Returns ActivityGraph component
 */
const ActivityGraph = ({ data }) => {
  /**
   * Component for showing custom tooltip on this activity chart
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
            backgroundColor: '#E60000',
            color: '#FFFFFF',
            fontSize: '7px',
            fontWeight: '500',
            textAlign: 'center',
            lineHeight: '24px',
            fontStyle: 'normal',
            width: '39px',
            height: '63px',
          }}
        >
          <p className="label">{`${payload[0].value}Kg`}</p>
          <p className="label">{`${payload[1].value}Kcal`}</p>
        </div>
      )
    }

    return null
  }

  CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
  }

  /**
   * Component for showing custom legend on this activity chart
   *
   * @component

   * @prop {Array} payload
   * @returns {(null | RenderLegend)}

   */
  const RenderLegend = ({ payload }) => (
    <div className="activity-legend-container">
      <span className="activity-title">Activité quotidienne</span>
      <span className="flex-1"></span>
      {payload.map((entry, index) => (
        <div className="activity-legend" key={`activity-legend-${index}`}>
          <div
            className="legend-circle"
            style={{ backgroundColor: entry.color }}
          ></div>
          <span className="activity-legend-title">{entry.value}</span>
        </div>
      ))}
    </div>
  )

  RenderLegend.propTypes = {
    payload: PropTypes.array,
  }

  return (
    <div className="activity-graph">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barGap={10}
          barSize={7}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            tickFormatter={(value, index) => index + 1}
            tick={{ fill: 'rgba(155, 158, 172, 1)', fontSize: '14px' }}
            tickMargin={10}
          />
          <YAxis
            hide={true}
            yAxisId="left"
            orientation="left"
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'rgba(155, 158, 172, 1)', fontSize: '14px' }}
            tickMargin={10}
            tickCount={3}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'rgba(155, 158, 172, 1)', fontSize: '14px' }}
            tickMargin={10}
            tickCount={4}
            type="number"
            domain={[(dataMin) => dataMin - 1, (dataMax) => dataMax + 1]}
          />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ outline: 'none' }}
          />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={8}
            height={50}
            wrapperStyle={{
              paddingBottom: '30px',
            }}
            content={<RenderLegend />}
          />
          <Bar
            yAxisId="right"
            name="Poids (kg)"
            dataKey="kilogram"
            fill="#282D30"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            yAxisId="left"
            name="Calories brûlées (kCal)"
            dataKey="calories"
            fill="#E60000"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

ActivityGraph.prototype = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ActivityGraph
