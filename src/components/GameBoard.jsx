import { motion } from "framer-motion";

export default function GameBoard({ cards, onCardsClick }) {
  return (
    <div className="game-board">
      {cards.map((card) => (
        <motion.img
          key={card.id}
          src={card.image}
          alt="character"
          className="card"
          onClick={() => onCardsClick(card.id)}
          layout
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      ))}
    </div>
  );
}
