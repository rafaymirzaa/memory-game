import { motion } from "framer-motion";

export default function GameBoard({ cards, onCardsClick, disabled = false }) {
  return (
    <div className={`game-board ${disabled ? 'disabled' : ''}`}>
      {cards.map((card) => (
        <motion.img
          key={card.id}
          src={card.image}
          alt="character"
          className={`card ${disabled ? 'disabled' : ''}`}
          onClick={() => !disabled && onCardsClick(card.id)}
          layout
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={disabled ? {} : { scale: 1.12 }}
          whileTap={disabled ? {} : { scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      ))}
    </div>
  );
}
