import { useRoutes } from "react-router-dom";
import { Home } from '../pages/home'
import { LandingPages } from '../pages/landingPages'

export const MainRoutes = () => {

    return useRoutes([
        {path: '/', element: <Home/> },
        {path: '/landingPages', element: <LandingPages/> }
    ])
}