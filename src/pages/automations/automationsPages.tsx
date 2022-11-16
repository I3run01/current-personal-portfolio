import {ProjectsDetails} from '../../components/ProjectsDetails'
import { Automations } from './Objects/automationsObjects'
export const AutomationsPage = () => {

    return (
        <div>
             <ProjectsDetails
             categoryPTBR='Automations'
             categoryENG='Automações'
             projects={Automations}
             />
        </div>
       
    )
}