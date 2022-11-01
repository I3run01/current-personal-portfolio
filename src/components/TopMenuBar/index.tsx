import { useContext } from "react"
import { Context } from "../../contexts/Context"
import { TopMenuBarStyled } from "./styled"

export const TopMenuBar = () => {
    const {state, dispatch} = useContext(Context)

    const changeTheme = () => {
        dispatch
    }

    return (
        <TopMenuBarStyled>
            <img src="TopMenuBar/BrazilLogo.svg" alt="" className="languageBTN" />
            <img src="TopMenuBar/Sun.svg" alt="" className="themeBTN" onClick={changeTheme}/>
        </TopMenuBarStyled>
    )
}