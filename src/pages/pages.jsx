import Welcome from "./Welcome";
import Game from "./Game";
import App from "../App";

const pages = [
    {
        path: "/",
        element: <App/>,
        children: [
            {index: true, element: <Welcome/>},
            { path: "game", element: <Game /> },
        ]

    }
]

export default pages