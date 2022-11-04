import { useContext, useState } from "react"
import { Context } from "../../contexts/Context"
import { ExperiencesStyled } from "./styled"

export const Experiences = () => {
    const {state, dispatch} = useContext(Context)
     
    const [title, setTitle] = useState<string>(state.language.status === 'english' ? 'Experiences' : 'Experiência')

    return (
        <ExperiencesStyled
        theme={state.theme.status}>
            <h1>{title}</h1>
        </ExperiencesStyled>
    )
}