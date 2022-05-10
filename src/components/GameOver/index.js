import './index.css'

const GameOver = props => {
  const {score, resetGame, isGameInProgress} = props

  const onClickPlayAgain = () => {
    resetGame()
  }

  return (
    <div className="gameover-container">
      <img
        className="trophy"
        alt="trophy"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
      />
      <p className="your-score">YOUR SCORE</p>
      <p className="score">{score}</p>
      <button className="button" onClick={onClickPlayAgain}>
        <img
          className="reset-img"
          alt="reset"
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png "
        />
        <p className="your-score">PLAY AGAIN</p>
      </button>
    </div>
  )
}

export default GameOver
