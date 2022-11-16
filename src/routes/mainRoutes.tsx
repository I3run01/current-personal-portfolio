import { useRoutes } from "react-router-dom";
import { Home } from '../pages/home/home'
import { LandingPages } from '../pages/landingPages/landingPages'
import { AutomationsPage } from '../pages/automations/automationsPages'

export const MainRoutes = () => {

    return useRoutes([
        {path: '/', element: <Home/> },
        {path: '/landingPages', element: <LandingPages/> },
        {path: '/automations', element: <AutomationsPage/> }
    ])
}