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
            <img src="/Cover/photo.svg" alt="" />
        </ScreenStyle>
    )
}