import './index.css'

const Navbar = props => {
  const {score, timer} = props

  return (
    <nav className="navbar-container">
      <div className="logo-score-container">
        <li className="logo-container">
          <img
            className="logo"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          />
        </li>
        <li className="score-time-container">
          <p className="score">Score: {score}</p>
          <img
            className="timer-image"
            alt="timer"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          />
          <p className="sec-counter">{timer} sec</p>
        </li>
      </div>
    </nav>
  )
}

export default Navbar
