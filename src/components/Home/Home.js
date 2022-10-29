import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'
import LogoTitle from '../../assets/images/logo_a.png'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Logo from './Logo/Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['n', 'd', 'r', 'e', 'w']
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    handleHover()
  }, [])

  const handleHover = () => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }

  return (
    <div className="container home">
      <div className="text_zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>

          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            charArray={nameArray}
            index={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            charArray={jobArray}
            index={22}
          />
        </h1>
        <h2> Fullstack developer, Strong leader</h2>
        <Link to="/contact" className="flat_button">
          Contact me!
        </Link>
      </div>
      <Logo />
    </div>
  )
}

export default Home
