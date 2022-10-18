import '../styles/Home.scss'
import Header from './Header'
import { useGet } from '../utils/hooks'
import properties from '../utils/properties'
import ActivityGraph from './ActivityGraph'
import AverageSessionsGraph from './AverageSessionsGraph'
import PerformanceGraph from './PerformanceGraph'
import ScoreGraph from './ScoreGraph'
import KeyData from './KeyData'


const Home = () => {
  const userInfo = useGet(`${properties.api.baseUrl}/${properties.userId}`)
  const userActivity = useGet(`${properties.api.baseUrl}/${properties.userId}/activity`)
  const userAverageSessions = useGet(`${properties.api.baseUrl}/${properties.userId}/average-sessions`)
  const userPerformance = useGet(`${properties.api.baseUrl}/${properties.userId}/performance`)

  console.log(userInfo.data.keyData)

  if (userInfo.error) {
    return <div>Oups il y a une erreur</div>
  }

  return (
    <div className="home">
      <Header />
      {userInfo.isLoading ? (
        <span>Loading...</span>
      ) : (
        <div className="main-container">
          <h1>
            Bonjour <span className='firstname'>{userInfo.data.userInfos.firstName}</span> 
          </h1>
          <div className='sub-container'>
            <div className='left-container'>
              <ActivityGraph data={userActivity.data.sessions} />
              <AverageSessionsGraph data={userAverageSessions.data.sessions} />
              <PerformanceGraph data={userPerformance.data.data} />
              <ScoreGraph data={userInfo.data.todayScore} />
            </div>
            <KeyData data={userInfo.data.keyData}/>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
