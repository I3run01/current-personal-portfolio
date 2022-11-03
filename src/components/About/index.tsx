import { useContext } from "react"
import { Context } from "../../contexts/Context"
import { AboutStyled } from "./styled"

export const About = () => {
    const {state, dispatch} = useContext(Context)

    return (
        <AboutStyled
        theme={state.theme.status}>
            <h1>About</h1>
            <img src="About/personalPhoto.svg" alt="" />
            <div id="text">
                
            </div>
        </AboutStyled>
    )
}