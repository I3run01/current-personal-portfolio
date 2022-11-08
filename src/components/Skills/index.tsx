import { useContext, useEffect, useState } from "react"
import { Context } from "../../contexts/Context"
import { SkillsStyled } from "./styled"
import { skillsObjects } from './Class/skillsObject'

export const Skills = () => {
    const {state, dispatch} = useContext(Context)
    const [skills, setSkills] = useState<string>(state.language.status === 'english' ? 'Skills' : 'Habilidades')
    const [skillsText, setSkillsText] = useState<string>('')

    useEffect(() => {
        state.language.status === 'english' ? setSkills('Skills') : setSkills('Habilidades')
    }, [state.language.status])

    const changeText = (textEng: string, textPTBR: string) => {
        state.language.status === 'english' ? setSkillsText(textEng) : setSkillsText(textPTBR)
    }

    return (
        <SkillsStyled
        theme={state.theme.status}
        onClick={()=> {changeText('','')}}>
            <h1>{skills}</h1>

            <div id="container">
                <div id="leftDiv">
                    {skillsObjects.map((item, index) => {
                        return (
                            <div 
                            id="logos"
                            onMouseEnter={()=> {changeText(item.textEng, item.textPTBR)}}
                            >
                                <img src={item.image} alt="" />
                                <h2>{item.name}</h2>
                            </div>
                        )
                    })}
                </div>

                <div id="rightDiv">
                    <p>{skillsText}</p>
                </div>
            </div>

            
        </SkillsStyled>
    )
}