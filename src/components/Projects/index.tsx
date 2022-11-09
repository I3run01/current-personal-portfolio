import { useContext, useEffect, useState } from 'react'
import { Context } from '../../contexts/Context'
import { ProjectsStyles } from './styled'
import { ProjectsType } from './projectClass/objects'

export const Projects = () => {
    const {state, dispatch} = useContext(Context)
    const [projects, setProjects] = useState<string>(state.language.status === 'english' ? 'Project' : 'Projetos')

    useEffect(() => {
        state.language.status === 'english' ? setProjects('Project') : setProjects('Projetos')
    }, [state.language.status])

    return (
        <ProjectsStyles
        theme={state.theme.status}>
            <h1>{projects}</h1>
            {
                ProjectsType.map((item, index) => {
                    return (
                        <a>
                            <div id='projectsTypes'>
                                <h2>{state.language.status === 'english' ? item.nameEng : item.namePTBR}</h2>
                                <img src={item.image} alt="" />
                            </div>
                        </a>
                    )
                })
            }
        </ProjectsStyles>
    )
}