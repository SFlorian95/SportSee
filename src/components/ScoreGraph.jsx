import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import '../styles/ScoreGraph.scss'
import PropTypes from 'prop-types'

/**
 * Component for showing user goal using RadialBarChart from recharts library
 *
 * @namespace
 * 
 * @see {@link https://recharts.org/en-US/api/RadialBarChart} for further information on RadialBarChart from recharts api
 * @component
 * 
 * @example
 * 
 * const data = 0.12
 * return (
 *  <ScoreGraph data={data} />
 * )
 * @prop {Number} data required user today score
 * @returns {ScoreGraph} Returns ScoreGraph component
 */
const ScoreGraph = ({ data }) => {
  const res = [{ score: data }]

  /**
     * Component for showing custom legend on this Score chart
     *
     * @component
  
     * @returns {(null | RenderLegend)}
  
     */
  const RenderLegend = () => (
    <div className="score-container">
      <span className="score">{data * 100}%</span>
      <p className="description">de votre objectif</p>
    </div>
  )
  return (
    <div className="score-graph">
      <span className="score-title">Score</span>
      <ResponsiveContainer>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="80%"
          outerRadius="90%"
          barSize={15}
          data={res}
          startAngle={90}
          endAngle={450}
        >
          <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
          <RadialBar
             minAngle={15}
             clockWise
             dataKey="score"
             fill="red"
             cornerRadius={20}
          />
          <Legend
            width={120}
            height={120}
            layout="vertical"
            verticalAlign="middle"
            align="center"
            content={<RenderLegend />}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

ScoreGraph.prototype = {
  /**
   * ScoreGraph data
   */
  data: PropTypes.number,
}

export default ScoreGraph
