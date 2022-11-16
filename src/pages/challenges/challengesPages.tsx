import {ProjectsDetails} from '../../components/ProjectsDetails'
import { projectsWithDataBase } from './Objects/challengesObjects'

export const ChallengesPage = () => {

    return (
        <div>
             <ProjectsDetails
             categoryPTBR='Desafios'
             categoryENG='Challenges'
             projects={projectsWithDataBase}
             />
        </div>
       
    )
}