import './AnimatedLetters.scss'

const AnimatedLetters = ({ letterClass, charArray, index }) => {
  return (
    <span>
      {charArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + index}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
