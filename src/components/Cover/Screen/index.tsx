import { useContext } from "react"
import { Context } from "../../../contexts/Context"
import { ScreenStyle } from "./style"

export const Screen = () => {
    const {state, dispatch} = useContext(Context)

    return (
        <ScreenStyle id="screen"
        theme={state.theme.status}>
            <div id="bkLeft"></div>
            <div id="bkRight"></div>
            <img src="/Cover/photo.png" alt="" />
            <h2 id='subtitle'>
                {
                state.language.status === 'english' ? 'You are ' : 'Você é muito '
                } 
                <span>
                    {
                        state.language.status === 'english' ? 'Welcome' : 'Bem-vindo'
                    }
                </span>
            </h2>
            <h1 id="title">
                Bruno A.V <br/> <span>Portfólio</span> 
            </h1>
        </ScreenStyle>
    )
}