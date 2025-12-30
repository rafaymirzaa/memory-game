
export default function GameBoard({cards, onCardsClick}){
   return (<>
   <div className="game-board">
    {cards.map(cards => (
        <img

        key={cards.id}
        src={cards.image}
        alt={cards.name}
        onClick={() => onCardsClick(cards.id)}

        />
    ))}
   </div>
   </>)
}