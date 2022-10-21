import '../styles/Home.scss'
import Header from './Header'
import { useGet } from '../utils/hooks'
import properties from '../utils/properties'
import ActivityGraph from './ActivityGraph'
import AverageSessionsGraph from './AverageSessionsGraph'
import PerformanceGraph from './PerformanceGraph'
import ScoreGraph from './ScoreGraph'
import KeyData from './KeyData'

/**
 * Display Home page component including all charts
 *
 * @namespace
 * @component
 * @returns {Home} Return Home component
 */
const Home = () => {
  const userInfo = useGet(`${properties.api.baseUrl}/${properties.userId}`)
  const userActivity = useGet(
    `${properties.api.baseUrl}/${properties.userId}/activity`
  )
  const userAverageSessions = useGet(
    `${properties.api.baseUrl}/${properties.userId}/average-sessions`
  )
  const userPerformance = useGet(
    `${properties.api.baseUrl}/${properties.userId}/performance`
  )

  console.log(userPerformance.data.data)

  if (userInfo.error) return <section>Oups il y a eu un problème</section>
  if (userActivity.error) return <section>Oups il y a eu un problème</section>
  if (userAverageSessions.error)
    return <section>Oups il y a eu un problème</section>
  if (userPerformance.error)
    return <section>Oups il y a eu un problème</section>

  return (
    <div className="home">
      <Header />
      {userInfo.isLoading ? (
        <span>Loading...</span>
      ) : (
        <div className="main-container">
          <h1>
            Bonjour{' '}
            <span className="firstname">
              {userInfo.data.userInfos.firstName}
            </span>
          </h1>
          <div className="sub-container">
            <div className="left-container">
              {userActivity.isLoading ? (
                <span>Loading...</span>
              ) : (
                <ActivityGraph data={userActivity.data.sessions} />
              )}

              {userAverageSessions.isLoading ? (
                <span>Loading...</span>
              ) : (
                <AverageSessionsGraph
                  data={userAverageSessions.data.sessions}
                />
              )}

              {userPerformance.isLoading ? (
                <span>Loading...</span>
              ) : (
                <PerformanceGraph data={userPerformance.data.data} />
              )}
              <ScoreGraph
                data={userInfo.data.todayScore || userInfo.data.score}
              />
            </div>
            <KeyData data={userInfo.data.keyData} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
