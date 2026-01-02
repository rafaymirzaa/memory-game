import GameBoard from "./GameBoard";
import Score from "./Score";


import { useState, useEffect } from "react";

export default function GameController ({playerName}){
    
    const [score, setScore] = useState(0)
    const[highScore, setHighScore] = useState(0)
    const [image, setImage] = useState([])
    const [clicked, setClicked] = useState([])

    useEffect(() => {
    async function fetchCard(){
       // console.log("we fetching")
        const res = await fetch ('https://rickandmortyapi.com/api/character')
        const data = await res.json()
       //console.log (data.results[0].id)
        const imageTile = data.results
        .slice(0, 9).filter((f,index)=>index !== 5) // get rids of any specific image u want
        .map((char) => ({
        id: char.id,
        image: char.image
      }))
      setImage(imageTile)
    }
    fetchCard()
   },[])

   function shuffleCards(arr) {
    let shuffled = [...arr]

   for (let i = shuffled.length - 1; i > 0; i--) 
      {
    let j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  setImage(shuffled)
}

const handleClick = (id) => {
  if (clicked.includes(id)) {
    setScore(0)
    alert(`Wrong! Game over, Score: ${score}`)
    setClicked([])
  } else {
    // better than setScore (score +1) cuz if user interacts too quick it crashed
    // used arrow to avoid naming a function and cluttering code up
     setScore(prev => {
      const newScore = prev + 1
      if (newScore > highScore) {
        setHighScore(newScore)
      }
      return newScore
    })
    setClicked(prev => [...prev, id])
    shuffleCards(image)
  }
}
    return (<> 
      <GameBoard 
          cards={image} 
          onCardsClick={handleClick} 
      />
      <Score
        score={score}
        highScore={highScore}
        playerName={playerName}
      />
   </>)
}