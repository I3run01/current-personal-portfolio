import { LeftMenuBarStyled } from "./styled"
import { BurguerMenu } from "./BurgerMenu"
import { useState } from "react"

export const LeftMenuBar = () =>{

    const [menuOpen, setMenuOpen] = useState<string>('closed')

    const handleMenuButton = () => {
        menuOpen === 'opened' ? setMenuOpen('closed') :  setMenuOpen('opened')
    }

    //Texts
    const [cover, setCover] = useState('Cover')
    const [about, setAbout] = useState('About')
    const [experience, setExperience] = useState('Experience')
    const [skills, setSkills] = useState('Skills')
    const [projects, setProjects] = useState('Projects')

    return (
        <LeftMenuBarStyled className={menuOpen}>
            <div className={`container ${menuOpen}`}>
                <BurguerMenu fction={handleMenuButton}/>    
                <a href="#CoverIndex"> · {cover}</a>
                <a href="#AboutIndex"> · {about}</a>
                <a href="#"> · {experience}</a>
                <a href="#"> · {skills}</a>
                <a href="#"> · {projects}</a>
            </div>
            
        </LeftMenuBarStyled>
    )
}