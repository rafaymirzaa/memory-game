import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PlayersList({ socket, currentPlayerName }) {
  const [players, setPlayers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!socket) return;

    // Listen for player updates
    socket.on('players:update', (updatedPlayers) => {
      setPlayers(updatedPlayers);
    });

    return () => {
      socket.off('players:update');
    };
  }, [socket]);

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        className="players-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        👥 {players.length}
      </motion.button>

      {/* Players List */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="players-list"
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <div className="players-header">
              <h3>Active Players</h3>
              <button onClick={() => setIsOpen(false)}>✕</button>
            </div>

            <div className="players-content">
              {players.length === 0 ? (
                <p className="no-players">No active players</p>
              ) : (
                players.map((player, index) => (
                  <motion.div
                    key={index}
                    className={`player-card ${
                      player.playerName === currentPlayerName ? 'current-player' : ''
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="player-name">
                      {player.playerName}
                      {player.playerName === currentPlayerName && ' (You)'}
                    </div>
                    <div className="player-stats">
                      <span>Score: {player.score}</span>
                      <span>High: {player.highScore}</span>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}