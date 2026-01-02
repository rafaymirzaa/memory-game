import { useOutletContext, Navigate } from "react-router-dom";
import GameController from "../components/GameController";

export default function Game() {
  const { playerName } = useOutletContext();

  if (!playerName) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <GameController playerName={playerName} />
    </>
  );
}