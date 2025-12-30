import GameBoard from "./GameBoard";
import { motion } from "framer-motion";

import { useState, useEffect } from "react";

export default function GameController (){

    const [score, setScore] = useState(0)
    const [image, setImage] = useState([])
    const [clicked, setClicked] = useState([])

    useEffect(() => {
    async function fetchCard(){
       // console.log("we fetching")
        const res = await fetch ('https://rickandmortyapi.com/api/character')
        const data = await res.json()
       //console.log (data.results[0].id)
        const imageTile = data.results
        .slice(0, 9).filter((f,index)=>index !== 5)
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
    setScore(prev => prev + 1)
    setClicked(prev => [...prev, id])
    shuffleCards(image)
  }
}
   return (<> 
   <motion.h1
  className="score"
  key={score}
  initial={{ y: -20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.3 }}
>
  Score: {score}
</motion.h1>
      <GameBoard 
          cards={image} 
          onCardsClick={handleClick} 
   />
   </>)
    
}