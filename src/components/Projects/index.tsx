import { useContext, useEffect, useState } from 'react'
import { Context } from '../../contexts/Context'
import { ProjectsStyles } from './styled'

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
            <div id='landingPages'></div>
            <div id='automations'></div>
            <div id='challenges'></div>
            <div id='sitesWithDataBase'></div>
        </ProjectsStyles>
    )
}