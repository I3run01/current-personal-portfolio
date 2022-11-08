import { useContext, useEffect, useState } from "react"
import { Context } from "../../contexts/Context"
import { SkillsStyled } from "./styled"
import { skillsObjects } from './Class/skillsObject'

export const Skills = () => {
    const {state, dispatch} = useContext(Context)
    const [skills, setSkills] = useState<string>(state.language.status === 'english' ? 'Skills' : 'Habilidades')
    const [skillsHover, setSkillsHover] = useState<boolean>(false)

    useEffect(() => {
        state.language.status === 'english' ? setSkills('Skills') : setSkills('Habilidades')
    }, [state.language.status])


    return (
        <SkillsStyled
        theme={state.theme.status}>
            <h1>{skills}</h1>

            <div id="container">
                    {skillsObjects.map((item, index) => {
                        return (
                            <div 
                            id="logos"
                            >
                                <img src={item.image} alt=""/>
                                <h2>{item.name}</h2>
                            </div>
                        )
                    })}
            </div>

            
        </SkillsStyled>
    )
}