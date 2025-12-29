
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
       
        const imageTile = data.results.slice(0, 6).map((char) => ({
        id: char.id,
        image: char.image
      }))
      setImage(imageTile)
    }
    fetchCard()
   },[])

    

   return (<> 
   <GameBoard
   />
   </>)
    
}