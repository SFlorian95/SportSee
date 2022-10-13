import "../styles/ActivityGraph.scss"
import { BarChart, Bar, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts"


const ActivityGraph = ({data}) => {
  //console.log(data)
  return (
    <div className="activity-graph">
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={100} height={100} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis orientation="right" />
                <Tooltip />
                <Legend />
                <Bar dataKey="kilogram" barSize={10} fill="#282D30" />
                <Bar dataKey="calories" barSize={10} fill="#E60000"/>
            </BarChart> 
        </ResponsiveContainer>
    </div>
  )
}

export default ActivityGraph
