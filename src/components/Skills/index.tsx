import { useContext, useEffect, useState } from "react"
import { Context } from "../../contexts/Context"
import { SkillsStyled } from "./styled"

export const Skills = () => {
    const {state, dispatch} = useContext(Context)
    const [skills, setSkills] = useState<string>(state.language.status === 'english' ? 'Skills' : 'Habilidades')

    useEffect(() => {
        state.language.status === 'english' ? setSkills('Skills') : setSkills('Habilidades')
    }, [state.language.status])

    return (
        <SkillsStyled
        theme={state.theme.status}>
            <h1>{skills}</h1>
        </SkillsStyled>
    )
}