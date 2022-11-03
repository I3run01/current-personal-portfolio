import { IconRightMenuBar } from "./hoverButton"
import { RightMenuBarStyled } from "./styled"
import { GitHubIcon } from "./Icons/Icons"
import { LinkedInIcon } from "./Icons/Icons"
import { CvIcon } from "./Icons/Icons"
import { InstagramIcon } from "./Icons/Icons"
import { TelegramIcon } from "./Icons/Icons"
import { WhatsAppIcon } from "./Icons/Icons"
import { useContext, useEffect, useState } from "react"
import { Context } from "../../contexts/Context"

export const RightMenuBar = () => {
    const {state, dispatch} = useContext(Context)
    const [sideMenhOpenedOrClosed, setSideMenhOpenedOrClosed] = useState<string>('closed')

    const [curriculum, setCurriculum] = useState<string>( state.language.status === 'english' ? 
    'CV/CurrentCV_ENG.docx':
    'CV/CurriculoPTBR_Atual.docx')

    const closerOrOpenMenu = () => {
        sideMenhOpenedOrClosed === 'closed' ? setSideMenhOpenedOrClosed('opened') : setSideMenhOpenedOrClosed('closed')
    }

    useEffect(() => {
        state.language.status === 'english' ? setCurriculum('CV/CurrentCV_ENG.docx') : setCurriculum('CV/CurriculoPTBR_Atual.docx')
    }, [state.language.status])

    return (
        <RightMenuBarStyled
        theme={state.theme.status}>
            <IconRightMenuBar
            ftcion={closerOrOpenMenu}/>
            <div className={`container ${sideMenhOpenedOrClosed}`}>
                <div className="Icons">
                    <a href="https://t.me/I3run01" target="_black"><TelegramIcon/></a>
                    <a href="https://api.whatsapp.com/send?phone=5541995686185" target="_black"><WhatsAppIcon/></a>
                    <a href="https://www.linkedin.com/in/i3run01/" target="_black"><LinkedInIcon/></a>
                    <a href="https://github.com/I3run01" target="_black"><GitHubIcon/></a>
                    <a href={curriculum}><CvIcon/></a>
                    <a href="https://www.instagram.com/i3run01developer/" target="_black"><InstagramIcon/></a>
                </div>
                <div className="topLine"></div>
                <div className="bottomLine"></div>
            </div>
        </RightMenuBarStyled>
    )
}