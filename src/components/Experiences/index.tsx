import { useContext, useEffect, useState } from "react"
import { Context } from "../../contexts/Context"
import { ExperiencesStyled } from "./styled"
import { expObjects } from "./ExpObjects"

export const Experiences = () => {
    const {state, dispatch} = useContext(Context)
     
    const [title, setTitle] = useState<string>(state.language.status === 'english' ? 'Experiences' : 'Experiências')

    useEffect(() => {
        state.language.status === 'english' ? setTitle('Experiences') : setTitle('Experiências')
    }, [state.language.status])

    return (
        <ExperiencesStyled
        theme={state.theme.status}>
            <h1>{title}</h1>
            {
                expObjects.map((item, index)=> {
                    
                    return <div id="objectContainer">
                        <h2>{state.language.status === 'english' ? item.start_eng : item.start_PTBR}</h2>
                        <h3>{state.language.status === 'english' ? item.title_eng : item.title_PTBR}</h3>
                        <p>{state.language.status === 'english' ? item.text_eng : item.text_PTBR}</p>
                    </div>
                })
            }            
            
        </ExperiencesStyled>
    )
}