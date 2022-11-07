import { useContext, useEffect, useState } from "react"
import { Context } from "../../contexts/Context"
import { ExperiencesStyled } from "./styled"
import { expObjects } from "./ExpObjects"

export const Experiences = () => {
    const {state, dispatch} = useContext(Context)
     
    const [title, setTitle] = useState<string>(state.language.status === 'english' ? 'Experiences' : 'Experiências')
    const [workingColorTheme, setWorkingColorTheme] = useState<string>(state.theme.status === 'dark' ? '#98B5FE' : '#0047FF')
    const [fontColor, setFontColor] = useState<string>(state.theme.status === 'dark' ? '#ffff' : '#000000')


    useEffect(() => {
        state.language.status === 'english' ? setTitle('Experiences') : setTitle('Experiências')
    }, [state.language.status])

    useEffect(() => {
        if(state.theme.status === 'dark') {
            setWorkingColorTheme('#98B5FE')
            setFontColor('#ffff')
        } else {
            setWorkingColorTheme('#0047FF')
            setFontColor('#000000')
        }
    }, [state.theme.status])

    return (
        <ExperiencesStyled
        theme={state.theme.status}>
            <h1>{title}</h1>
            {
                expObjects.map((item, index)=> {
                    
                    return <div id="objectContainer">
                        <div id="designContainer">
                            <div id="circleSymbol"
                            style={item.working_Now ? {background: workingColorTheme} : {background: '#001D66'}}
                            ></div>
                            <div id="lineSymble"></div>   
                        </div>
                        <div id="textContainer">
                            <h2
                            style={item.working_Now ? {color: workingColorTheme} : {color: fontColor}}
                            >{state.language.status === 'english' ? item.start_eng : item.start_PTBR}</h2>
                            <h3>{state.language.status === 'english' ? item.title_eng : item.title_PTBR}</h3>
                            <p>{state.language.status === 'english' ? item.text_eng : item.text_PTBR}</p>
                        </div>
                        
                    </div>
                })
            }            
            
        </ExperiencesStyled>
    )
}