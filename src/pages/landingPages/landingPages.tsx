import {ProjectsDetails} from '../../components/ProjectsDetails'
import { landingPages } from './LandingPagesObjects'

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