import { RigthMenuBarStyled } from "./styled"
import { BurguerMenu } from "./BurgerMenu"
import { useState } from "react"

export const RigthMenuBar = () =>{

    //Texts
    const [cover, setCover] = useState('Cover')
    const [about, setAbout] = useState('About')
    const [experience, setExperience] = useState('Experience')
    const [skills, setSkills] = useState('Skills')
    const [projects, setProjects] = useState('Projects')

    return (
        <RigthMenuBarStyled>
            <BurguerMenu/>    
            <a href=""><li>{cover}</li></a>
            <a href=""><li>{about}</li></a>
            <a href=""><li>{experience}</li></a>
            <a href=""><li>{skills}</li></a>
            <a href=""><li>{projects}</li></a>
        </RigthMenuBarStyled>
    )
}