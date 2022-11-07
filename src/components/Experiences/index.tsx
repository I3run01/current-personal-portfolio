import { useContext, useEffect, useState } from "react"
import { Context } from "../../contexts/Context"
import { ExperiencesStyled } from "./styled"
import { expObjects } from "./ExpObjects"

export const Experiences = () => {
    const {state, dispatch} = useContext(Context)
     
    const [title, setTitle] = useState<string>(state.language.status === 'english' ? 'Experiences' : 'Experiências')
    const [workingColorTheme, setWorkingColorTheme] = useState<string>(state.theme.status === 'dark' ? '#98B5FE' : '#0047FF')
    const [fontColor, setFontColor] = useState<string>(state.theme.status === 'dark' ? '#ffff' : '#000000')
    const [circleColor, setCircleColor] = useState<string>(state.theme.status === 'dark' ? '#2348a8' : '#001D66')


    useEffect(() => {
        state.language.status === 'english' ? setTitle('Experiences') : setTitle('Experiências')
    }, [state.language.status])

    useEffect(() => {
        if(state.theme.status === 'dark') {
            setWorkingColorTheme('#98B5FE')
            setFontColor('#ffff')
            setCircleColor('#2348a8')
        } else {
            setWorkingColorTheme('#0047FF')
            setFontColor('#000000')
            setCircleColor('#001D66')
        }
    }, [state.theme.status])

    return (
        <ExperiencesStyled
        theme={state.theme.status}
        id='Experiences'>
            <h1>{title}</h1>
            {
                expObjects.map((item, index)=> {
                    
                    return <div id="objectContainer">
                        <div id="designContainer">
                            <div id="circleSymbol"
                            style={item.working_Now ? {background: workingColorTheme} : {background: circleColor}}
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