import { ProjectsDetailsStyles } from './styled'
import { MainStyled } from '../../globasStyles'
import { useContext, useState } from 'react'
import { Context } from '../../contexts/Context'
import { Link } from 'react-router-dom'

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

    const [gallary, setGallaryStatus] = useState<string>('gallaryHidden')
    const [gallaryOverflow, setGallaryOverflow] = useState<string>('gallaryBKOff')
    const [indexGallary, setIndexGallary] = useState<number>(0)

    const changeGallaryStatus = (index: number) => {
        gallary === 'gallaryHidden' ? setGallaryStatus('gallaryShowed') : setGallaryStatus('gallaryHidden')
        gallaryOverflow === 'gallaryBKOff' ? setGallaryOverflow('gallaryBKOn') : setGallaryOverflow('gallaryBKOff')
        setIndexGallary(index)
    }

    return (
        <MainStyled>
            <ProjectsDetailsStyles
            theme={state.theme.status}>

                <Link to="/"><img src="Icons/backButton.svg" alt="" className='backButton'/></Link>

                <h1
                style={gallary === 'gallaryHidden' ? 
                {opacity:'100%'} : {opacity:'0%'}}
                >{state.language.status === 'english' ? categoryENG : categoryPTBR}</h1>
                
                {projects.map((item, index)=>{
                    return (
                        <div id='container'
                        style={gallary === 'gallaryHidden' ? 
                        {opacity:'100%'} : {opacity:'0%'}}>
                            <div id='topDiv'>
                                <img src={item.imageCape} alt="" />
                                <div>
                                    <h2>{state.language.status === 'english' ? item.titleENG : item.titlePTBR}</h2>
                                </div>
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
                                    <div className='Icons'
                                    onClick={() => {changeGallaryStatus(index)}}>
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

                <div className={`gallary ${gallary}`}>
                    
                    <h1>{state.language.status === 'english' ? 'Gallary' : 'Galeria'}</h1>

                    <h2>{state.language.status === 'english' ? projects[indexGallary].titleENG : projects[indexGallary].titlePTBR}</h2>

                    <div id='seeAllProject'
                    onClick={() => {changeGallaryStatus(0)}}>
                        <div id='seeAllProjectIcon'                        >
                            <img src="Icons/seeAllProjectsIcon.svg" alt="" />
                        </div>
                        <div id='seeAllProjectText'                        >
                            <h3>
                                {state.language.status === 'english' ? 'See all Project' : 'Ver todos os projetos'}
                            </h3>
                        </div>
                    </div>

                    <div id='imagesContainer'>

                        {
                            projects[indexGallary].gallary.map((item, index)=>{
                                return (
                                    <div id='images'>
                                        <img src={item.image} alt="" />
                                        <div id='paragrath'>
                                            <p>
                                                {state.language.status === 'english' ? item.textENG : item.textPTBR}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className={`gallaryBK ${gallaryOverflow}`}>
                </div>
            </ProjectsDetailsStyles>
        </MainStyled>
    )
}