import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts'
import '../styles/PerformanceGraph.scss'

const PerformanceGraph = ({ data }) => {
  return (
    <div className="performance-graph">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={75} width={300} height={300} data={data}>
          <PolarGrid />
          <PolarAngleAxis stroke='white' dataKey="kind" />
          <Radar stroke='#FF0101B2' fill='#FF0101B2' dataKey="value" />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PerformanceGraph
