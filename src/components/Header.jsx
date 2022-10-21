import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../styles/Header.scss'
import yoga from '../assets/yoga.png'
import swim from '../assets/swim.png'
import bicycle from '../assets/bicycle.png'
import dumbbell from '../assets/dumbbell.png'

const routes = [
  {
    name: 'Accueil',
    path: '#',
  },
  {
    name: 'Profil',
    path: '#',
  },
  {
    name: 'Réglage',
    path: '#',
  },
  {
    name: 'Communauté',
    path: '#',
  },
]

/**
 * Component for showing header
 *
 * @namespace
 * @component
 * @returns {Header} Returns Header component
 */
const Header = () => {
  return (
    <header>
      <nav className="horizontal-navbar">
        <Link to="/">
          <img src={logo} alt="Logo SportSee" />
        </Link>
        <div className="horizontal-links-container">
          {routes.map((route, index) => (
            <Link to={route.path} key={index}>
              {route.name}
            </Link>
          ))}
        </div>
      </nav>
      <nav className="vertical-navbar">
        <div>
          <img src={yoga} alt="yoga icon" />
          <img src={swim} alt="swimming icon" />
          <img src={bicycle} alt="bicycle icon" />
          <img src={dumbbell} alt="dumbbell icon" />
        </div>
        <span>Copiryght, SportSee 2020</span>
      </nav>
    </header>
  )
}

export default Header
