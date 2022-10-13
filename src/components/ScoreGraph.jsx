import { RadialBar, RadialBarChart } from "recharts"


const ScoreGraph = ({data}) => {
    return (
        <div className="score-graph">
            <RadialBarChart width={500} height={300} innerRadius={20} outerRadius={140} barSize={40} data={data}>
                <RadialBar background clockwise dataKey="todayScore" />
            </RadialBarChart>
        </div>
    )
}

export default ScoreGraph