
export default function GameBoard({cards, onCardsClick}){
   return <>
   <div className="game-board">
    {cards.map(cards => (
        <image

        key={card.id}
        src={card.image}
        alt={card.name}
        onClick={() => onCardClick(card.id)}
        
        />
    ))}
   </div>
   </>
}