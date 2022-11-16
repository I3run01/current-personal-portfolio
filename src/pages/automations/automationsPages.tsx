import {ProjectsDetails} from '../../components/ProjectsDetails'
import { Automations } from './Objects/automationsObjects'
export const AutomationsPage = () => {

    return (
        <div>
             <ProjectsDetails
             categoryPTBR='Automações'
             categoryENG='Automations'
             projects={Automations}
             />
        </div>
       
    )
}