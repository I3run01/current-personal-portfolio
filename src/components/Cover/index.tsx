import { useContext, useEffect, useState } from "react"
import { Context } from "../../contexts/Context"
import { CoverStyled } from "./styled"
import { Screen } from "./Screen"

export const Cover = () => {
    const {state, dispatch} = useContext(Context)
    
    const screenLightEng = 'Cover/ScreenLightEng.svg'
    const screenDarkEng = 'Cover/ScreenDarkEng.svg'
    const screenLightPTBR = 'Cover/ScreenLightPTBR.svg'
    const screenDarkPTBR = 'Cover/ScreenDarkPTBR.svg'

    const [coverImage, setCoverImage] = useState<string>(state.theme.status === 'dark' ? screenLightEng : screenDarkEng)

    useEffect(() => {
        if(state.theme.status === 'light' && state.language.status === 'english') setCoverImage(screenLightEng)
        else if(state.theme.status === 'light' && state.language.status === 'portuguese') setCoverImage(screenLightPTBR)
        else if(state.theme.status === 'dark' && state.language.status === 'portuguese') setCoverImage(screenDarkPTBR)
        else setCoverImage(screenDarkEng)
    }, [ ,state.theme.status, state.language.status])

    return (
        <CoverStyled
        id="CoverIndex">
            <Screen/>
            <img src={coverImage} alt="" />
            <div id="bkmain">
                <div id="bk01"></div>
                <div id="bk02"></div>
            </div>
        </CoverStyled>
    )
}