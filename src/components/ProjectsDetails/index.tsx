import { ProjectsDetailsStyles } from './styled'
import { MainStyled } from '../../globasStyles'
import { useContext } from 'react'
import { Context } from '../../contexts/Context'

type externalLinksType = {
    icons: string
    name:string
    link:string
}[]

type gallaryType = {
    image: string
    textPTBR: string
    textENG:string
}[]

type Props = {
    categoryPTBR: string
    categoryENG: string
    projects: {
        titlePTBR: string,
        titleENG: string,
        textPTBR:string,
        textENG:string,
        imageCape:string,
        externalLinks:externalLinksType,
        gallary:gallaryType,

    }[]
}

export const ProjectsDetails = ({categoryPTBR, categoryENG, projects}:Props) => {
    const {state, dispatch} = useContext(Context)

    return (
        <MainStyled>
            <ProjectsDetailsStyles
            theme={state.theme.status}>
                <h1>{state.language.status === 'english' ? categoryENG : categoryPTBR}</h1>
                {projects.map((item, index)=>{
                    return (
                        <div id='container'>
                            <div id='topDiv'>
                                <img src={item.imageCape} alt="" />
                                <h2>{state.language.status === 'english' ? item.titleENG : item.titlePTBR}</h2>
                            </div>
                            
                            {<div id='bottomDiv'>
                                <div id='leftBottomDiv'>
                                    <div className='emptyDiv'>

                                    </div>
                                    {item.externalLinks.map((subitem, index)=> {
                                        return (
                                            <a href={subitem.link} className='Icons' target='_blank'>
                                                <img src={subitem.icons} alt="" />
                                                <h3>{subitem.name}</h3>
                                            </a>
                                        )
                                    })}
                                    <div className='Icons'>
                                        <img src='Icons/Gallary.svg' alt="" />
                                        <h3>{state.language.status === 'english' ? 'Gallary' : 'Galeria'}</h3>
                                    </div>
                                </div>
                                <div id='rightBottomDiv'>
                                    <p >
                                        {
                                            state.language.status === 'english' ? item.textENG : item.textPTBR
                                        }
                                    </p>
                                </div>
                            </div>}
                        </div>
                    )
                })}
            </ProjectsDetailsStyles>
        </MainStyled>
    )
}