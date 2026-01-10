import GameBoard from "./GameBoard";
import Score from "./Score";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

const API_URL = 'http://127.0.0.1:5000';

export default function GameController({ playerName, socket }) {
  const navigate = useNavigate();

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [image, setImage] = useState([]);
  const [clicked, setClicked] = useState([]);

  // fetch player's existing high score on mount
  useEffect(() => {
    async function fetchPlayerScore() {
      try {
        const res = await fetch(`${API_URL}/scores/${playerName}`);
        if (res.ok) {
          const data = await res.json();
          setHighScore(data.highScore);
          
          // Update socket with initial high score
          if (socket) {
            socket.emit('score:update', {
              playerName,
              score: 0,
              highScore: data.highScore
            });
          }
        }
      } catch (error) {
        console.log('No existing score found');
      }
    }
    
    if (playerName) {
      fetchPlayerScore();
    }
  }, [playerName, socket]);

  useEffect(() => {
    async function fetchCard() {
      const res = await fetch('https://rickandmortyapi.com/api/character');
      const data = await res.json();
      const imageTile = data.results
        .slice(0, 9)
        .filter((f, index) => index !== 5) // roots out any of the card you dont want from the api
        .map((char) => ({
          id: char.id,
          image: char.image,
        }));
      setImage(imageTile);
    }
    fetchCard();
  }, []);

  // Update socket whenever score changes
  useEffect(() => {
    if (socket && playerName) {
      socket.emit('score:update', {
        playerName,
        score,
        highScore
      });
    }
  }, [score, highScore, socket, playerName]);

  // save score to database
  async function saveScore(finalScore, finalHighScore) {
    try {
      await fetch(`${API_URL}/scores`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          playerName,
          score: finalScore,
          highScore: finalHighScore,
        }),
      });
    } catch (error) {
      console.error('Error saving score:', error);
    }
  }

  function shuffleCards(arr) {
    let shuffled = [...arr];

    for (let i = shuffled.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    setImage(shuffled);
  }

  const handleClick = (id) => {
    if (clicked.includes(id)) {
      // save score before navigating
      saveScore(score, highScore);
      
      navigate('/gameover', {
        state: {
          score,
          highScore,
          playerName,
        },
        replace: true,
      });
      
      setScore(0);
      setClicked([]);
    } else {
      setScore((prev) => {
        const newScore = prev + 1;
        if (newScore > highScore) {
          setHighScore(newScore);
          saveScore(newScore, newScore);
        }
        return newScore;
      });
      setClicked((prev) => [...prev, id]);
      shuffleCards(image);
    }
  };

  return (
    <>
      <GameBoard cards={image} onCardsClick={handleClick} />
      <Score score={score} highScore={highScore} playerName={playerName} />
    </>
  );
}