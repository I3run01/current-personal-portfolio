import { useState } from "react"
import { BurguerMenuStyled } from "./styled"


export const BurguerMenu = () => {

    //Texts
    const [cover, setCover] = useState('Cover')
    const [about, setAbout] = useState('About')
    const [experience, setExperience] = useState('Experience')
    const [skills, setSkills] = useState('Skills')
    const [projects, setProjects] = useState('Projects')

    return (
        <BurguerMenuStyled>
            <ul>
                <li>{cover}</li>
                <li>{about}</li>
                <li>{experience}</li>
                <li>{skills}</li>
                <li>{projects}</li>
            </ul>
        </BurguerMenuStyled>
    )
}