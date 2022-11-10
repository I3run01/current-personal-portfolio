import { useRoutes } from "react-router-dom";
import { Home } from '../pages/home'

export const mainRoutes = () => {

    return useRoutes([
        {path: '/', element: <Home/> }
    ])
}