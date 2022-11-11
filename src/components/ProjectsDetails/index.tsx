import { ProjectsDetailsStyles } from './styled'
import { MainStyled } from '../../globasStyles'
import { useContext } from 'react'
import { Context } from '../../contexts/Context'

type Props = {
    categoryPTBR: string
    categoryENG: string
}

export const ProjectsDetails = ({categoryPTBR,categoryENG}:Props) => {
    const {state, dispatch} = useContext(Context)

    return (
        <MainStyled>
            <ProjectsDetailsStyles>
                <h2>{state.language.status === 'english' ? categoryENG : categoryPTBR}</h2>
                {}
            </ProjectsDetailsStyles>
        </MainStyled>
    )
}