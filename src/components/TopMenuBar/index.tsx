import { useContext } from "react"
import { Context } from "../../contexts/Context"
import { TopMenuBarStyled } from "./styled"

export const TopMenuBar = () => {
    const {state, dispatch} = useContext(Context)

    const changeTheme = () => {
        if( state.theme.status === 'dark' ) {
            dispatch({
                type: 'changeTheme',
                payload: {
                    status: 'light'
                }
            })
        } else {
            dispatch({
                type: 'changeTheme',
                payload: {
                    status: 'dark'
                }
            })
        }
    }

    
    const changeLanguage = () => {
        if (state.language.status === 'english') {
            dispatch({
                type: 'changeLanguage',
                payload: {
                    status: 'portuguese'
                }
            })
        } else {
            dispatch({
                type: 'changeLanguage',
                payload: {
                    status: 'english'
                }
            })
        }
    }
    

    return (
        <TopMenuBarStyled
        theme={state.theme.status}>

            { state.language.status === 'english' ?
            <img src="TopMenuBar/UkLogo.svg" alt="" className="languageBTN" onClick={changeLanguage}/> : 
            <img src="TopMenuBar/BrazilLogo.svg" alt="" className="languageBTN" onClick={changeLanguage}/>}

            {state.theme.status === 'dark' ?
            <img src="TopMenuBar/Sun.svg" alt="" className="themeBTN" onClick={changeTheme}/> :
            <img src="TopMenuBar/Moon.svg" alt="" className="themeBTN" onClick={changeTheme}/> }
        </TopMenuBarStyled>
    )
}