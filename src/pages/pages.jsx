import Welcome from "./Welcome";
import Game from "./Game";
import App from "../App";
import GameOver from "./GameOver";

const pages = [
    {
        path: "/",
        element: <App/>,
        children: [
            {index: true, element: <Welcome/>},
            {path: "game", element: <Game /> },
            {path:"gameover", element:<GameOver/>}
        ]

    }
]

export default pages