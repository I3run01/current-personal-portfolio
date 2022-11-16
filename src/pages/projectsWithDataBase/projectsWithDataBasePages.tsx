import {ProjectsDetails} from '../../components/ProjectsDetails'
import { projectsWithDataBase } from './Objects/projectsWithDataBaseObjects'

export const ProjectsWithDataBasePage = () => {

    return (
        <div>
             <ProjectsDetails
             categoryPTBR='projetos com banco de dados'
             categoryENG='projects with database'
             projects={projectsWithDataBase}
             />
        </div>
       
    )
}