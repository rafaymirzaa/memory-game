import { useOutletContext, Navigate } from "react-router-dom";
//import GameController from "../components/GameController";
import Multiplayer from "../components/Multiplayer";
import ChatBox from "../components/ChatBox";
import PlayersList from "../components/PlayerList";

export default function Game() {
  const { playerName, socket } = useOutletContext();

  if (!playerName) {
    return <Navigate to="/" replace />; // handles a bad url
  }

  return (
    <>
      <Multiplayer playerName={playerName} socket={socket} />
      <ChatBox socket={socket} playerName={playerName} />
      <PlayersList socket={socket} currentPlayerName={playerName} />
    </>
  );
}