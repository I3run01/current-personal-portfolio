import {ProjectsDetails} from '../../components/ProjectsDetails'
import { projectsWithDataBase } from './Objects/projectsWithDataBaseObjects'

export const ProjectsWithDataBasePage = () => {

    return (
        <div>
             <ProjectsDetails
             categoryPTBR='Projetos com banco de dados'
             categoryENG='Projects with database'
             projects={projectsWithDataBase}
             />
        </div>
       
    )
}