// Write your code here.
import './index.css'

const NavBar = props => {
  const {score} = props
  return (
    <nav className="bg">
      <div className="Score-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="game-logo"
        />
        <p className="game-logo-para">Emoji Game</p>
      </div>
      <div className="Score-container">
        <p className="score">Score: {score}</p>
        <p className="score">Top Score:0</p>
      </div>
    </nav>
  )
}
export default NavBar
