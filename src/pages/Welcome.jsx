import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";


export default function Welcome() {
  const navigate = useNavigate();
  const { setPlayerName } = useOutletContext();
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  function startGame(e) {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter your name!");
      return;
    }
    setError("");
    setPlayerName(name);
    navigate("/game");
  }

  return (
    <motion.form
      className="welcome-card"
      onSubmit={startGame}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        Welcome
      </motion.h1>

      <motion.input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        whileFocus={{ scale: 1.02 }}
      />

      {error && (
        <motion.p
          className="error"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {error}
        </motion.p>
      )}

      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Start Game
      </motion.button>
    </motion.form>
  );
}
