import { RigthMenuBarStyled } from "./styled"
import { BurguerMenu } from "./BurgerMenu"
import { useState } from "react"

export const RigthMenuBar = () =>{

    const [menuOpen, setMenuOpen] = useState<string>('opened')

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
        <RigthMenuBarStyled className={menuOpen}>
            <div className={`container ${menuOpen}`}>
                <BurguerMenu fction={handleMenuButton}/>    
                <a href="#"> · {about}</a>
                <a href="#"> · {experience}</a>
                <a href="#"> · {projects}</a>
                <a href="#"> · {cover}</a>
                <a href="#"> · {skills}</a>
            </div>
            
        </RigthMenuBarStyled>
    )
}