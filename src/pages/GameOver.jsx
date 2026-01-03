import { useLocation, Link } from "react-router";

const GameOver = () =>{

  const location = useLocation();
  const { score = 0, highScore = 0 } = location.state || {};

    return <>
   <div className="game-over">
    <h1>Game Over</h1>
    <p>Your Score: {score}</p>
    <p>High Score: {highScore}</p>

    <Link to="/game">
        <button>Play Again</button>
    </Link>

    <Link to="/">
        <button>Change Player</button>
    </Link>

        </div>
      </>
}

export default GameOver;