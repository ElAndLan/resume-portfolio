import { Link, NavLink } from 'react-router-dom'
import './Sidebar.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  faDiscord,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className={'navbar'}>
      <Link className={'logo'} to="/">
        <img src={LogoS} alt="logo" />
        <img src={LogoSubtitle} alt="logo" />
      </Link>
      <nav>
        <NavLink
          exact="true"
          className={({ isActive }) => {
            const linkClasses = ['home_link']
            if (isActive) linkClasses.push('active')

            return linkClasses.join(' ')
          }}
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          className={({ isActive }) => {
            const linkClasses = ['about_link']
            if (isActive) linkClasses.push('active')

            return linkClasses.join(' ')
          }}
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          className={({ isActive }) => {
            const linkClasses = ['contact_link']
            if (isActive) linkClasses.push('active')

            return linkClasses.join(' ')
          }}
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/andrew-lanoue-1395a916b/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ElAndLan"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://discordapp.com/users/561712589453656097"
          >
            <FontAwesomeIcon icon={faDiscord} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
