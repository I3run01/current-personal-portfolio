import { useRoutes } from "react-router-dom";
import { Home } from '../pages/home/home'
import { LandingPages } from '../pages/landingPages/landingPages'

export const MainRoutes = () => {

    return useRoutes([
        {path: '/', element: <Home/> },
        {path: '/landingPages', element: <LandingPages/> }
    ])
}