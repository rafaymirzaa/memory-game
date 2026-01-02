import { motion } from "framer-motion";

export default function Score ({score, highScore, playerName}){
    return (
      <div className="score-container">
        <motion.h1
          className="score"
          key="score"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Score: {score}
        </motion.h1>

        {playerName && (
          <motion.h1
            className="score"
            key="player"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {playerName}
          </motion.h1>
        )}

        <motion.h1
          className="score"
          key="highScore"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          High Score: {highScore}
        </motion.h1>
      </div>
    )
}