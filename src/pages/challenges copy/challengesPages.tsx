import {ProjectsDetails} from '../../components/ProjectsDetails'
import { Automations } from './Objects/challengesObjects'

export const ChallengesPage = () => {

    return (
        <div>
             <ProjectsDetails
             categoryPTBR='Desafios'
             categoryENG='Challenges'
             projects={Automations}
             />
        </div>
       
    )
}