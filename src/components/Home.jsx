import '../styles/Home.scss'
import Header from './Header'
import { useGet } from '../utils/hooks'
import properties from '../utils/properties'

const Home = () => {
  const userInfo = useGet(`${properties.api.baseUrl}/${properties.userId}`)

  if (userInfo.error) {
    return <div>Oups il y a une erreur</div>
  }

  return (
    <div className="home">
      <Header />
      {userInfo.isLoading ? (
        <span>Loading...</span>
      ) : (
        <div>Bonjour {userInfo.data.userInfos.firstName}</div>
      )}
    </div>
  )
}

export default Home
