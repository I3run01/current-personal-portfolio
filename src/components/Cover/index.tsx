import { useContext, useEffect, useState } from "react"
import { Context } from "../../contexts/Context"
import { CoverStyled } from "./styled"

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
        <CoverStyled>
            <img src={coverImage} alt="" />
        </CoverStyled>
    )
}