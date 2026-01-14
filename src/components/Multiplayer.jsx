import { useState, useEffect } from "react";
import GameController from "./GameController";

export default function Multiplayer({ playerName, socket }) 
{
  const [players, setPlayers] = useState([]);
  const [hasPlayer2, setHasPlayer2] = useState(false);

  // player updates
  useEffect(() => {
    if (!socket) return;

    socket.on('players:update', (updatedPlayers) => {
      setPlayers(updatedPlayers);
      // can be scaled to any number of players
      setHasPlayer2(updatedPlayers.length >= 2);
    });

    return () => {
      socket.off('players:update');
    };
  }, [socket]);

  //  current player and other player
  const currentPlayer = players.find(p => p.playerName === playerName);
  const otherPlayers = players.filter(p => p.playerName !== playerName);
  const player2Name = otherPlayers.length > 0 ? otherPlayers[0].playerName : null;

  return (
    <div className="multiplayer-game">
      <div className="player-one">
        <GameController
          playerName={playerName}
          socket={socket}
          isPlayer1={true}
          disabled={false}
        />
      </div>
      <div className="player-two">
        {hasPlayer2 && player2Name ? (
          <GameController
            playerName={player2Name}
            socket={socket}
            isPlayer1={false}
            disabled={false}
          />
        ) : (
          <div className="no-player-2-message">
            <p>No other player, You are alone</p>
          </div>
        )}
      </div>
    </div>
  );
}