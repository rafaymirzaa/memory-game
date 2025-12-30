import { motion } from "framer-motion";
export default function Score ({score, highScore}){
    return (<>
         <motion.h1
        className="score"
        key= "score"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        Score: {score}
       
      </motion.h1>

       <motion.h1
        className="score"
        key= "highScore" // fixed the error of using numeric value for key
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        HighScore: {highScore}
       
      </motion.h1>
    </>)
}