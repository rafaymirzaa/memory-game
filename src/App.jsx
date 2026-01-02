import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [playerName, setPlayerName] = useState("");

  return (
    <>
      <Outlet context={{ playerName, setPlayerName }} />
    </>
  );
}
