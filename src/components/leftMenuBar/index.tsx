import { LeftMenuBarStyled } from "./styled"
import { BurguerMenu } from "./BurgerMenu"
import { useContext, useEffect, useState } from "react"
import { Context } from "../../contexts/Context"

export const LeftMenuBar = () =>{
    const {state, dispatch} = useContext(Context)
    const [menuOpen, setMenuOpen] = useState<string>('closed')

    //Texts
    const [cover, setCover] = useState<string>(state.language.status === 'english' ? 'Cover' : 'Capa')
    const [about, setAbout] = useState<string>(state.language.status === 'english' ? 'About' : 'Sobre')
    const [Experiences, setExperiences] = useState<string>(state.language.status === 'english' ? 'Experiences' : 'Experiências')
    const [skills, setSkills] = useState<string>(state.language.status === 'english' ? 'Skills' : 'Habilidades')
    const [projects, setProjects] = useState<string>(state.language.status === 'english' ? 'Projects' : 'Projetos')

    useEffect(() => {
        if(state.language.status === 'english') {
            setCover('Cover')
            setAbout('About')
            setExperiences('Experiences')
            setSkills('Skills')
            setProjects('Projects')
        } else {
            setCover('Capa')
            setAbout('Sobre')
            setExperiences('Experiências')
            setSkills('Habilidades')
            setProjects('Projetos')
        }
    }, [state.language.status])

    const handleMenuButton = () => {
        menuOpen === 'opened' ? setMenuOpen('closed') :  setMenuOpen('opened')
    }


    return (
        <LeftMenuBarStyled className={menuOpen}>
            <div className={`container ${menuOpen}`}>
                <BurguerMenu fction={handleMenuButton}/>    
                <a href="#CoverIndex"> · {cover}</a>
                <a href="#AboutIndex"> · {about}</a>
                <a href="#ExperiencesIndex"> · {Experiences}</a>
                <a href="#"> · {skills}</a>
                <a href="#"> · {projects}</a>
            </div>
            
        </LeftMenuBarStyled>
    )
}