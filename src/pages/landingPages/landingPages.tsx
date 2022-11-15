import {ProjectsDetails} from '../../components/ProjectsDetails'
import { landingPages } from './Objects/LandingPagesObjects'

export const LandingPages = () => {

    return (
        <div>
             <ProjectsDetails
             categoryPTBR='Landing Pages'
             categoryENG='Landing Pages'
             projects={landingPages}
             />
        </div>
       
    )
}