import { XAxis, AreaChart, ResponsiveContainer, Tooltip, Area } from 'recharts'
import '../styles/AverageSessionsGraph.scss'

const AverageSessionsGraph = ({ data }) => {
  return (
    <div className="average-sessions-graph">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart width={500} height={300} data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="white" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FF0000" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="sessionLength"
            stroke="white"
            fill='url(#colorUv)'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AverageSessionsGraph
