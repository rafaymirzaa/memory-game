
import GameBoard from "./components/GameBoard";

import { useState, useEffect } from "react";

export default function App (){

    const [score, setScore] = useState(0)
    const [image, setImage] = useState([])

    useEffect(() => {
    async function fetchCard(){
       // console.log("we fetching")
        const res = await fetch ('https://rickandmortyapi.com/api/character')
        const data = await res.json()
       
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

    function shuffleCards(arr){
        let shuffled = [... arr]

        for (let i = shuffled.length() - 1 ; i > 0; i--){
           let j = Math.floor(Math.random() * i)
           [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
        }
    }

   return (<> 
   <GameBoard
    cards = {image}
    onCardsClick={shuffleCards}
   />
   </>)
    
}