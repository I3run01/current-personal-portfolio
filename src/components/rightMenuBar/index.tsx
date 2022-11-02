import { IconRightMenuBar } from "./hoverButton"
import { RightMenuBarStyled } from "./styled"
import { GitHubIcon } from "./Icons/Icons"
import { LinkedInIcon } from "./Icons/Icons"
import { CvIcon } from "./Icons/Icons"
import { InstagramIcon } from "./Icons/Icons"
import { TelegramIcon } from "./Icons/Icons"
import { WhatsAppIcon } from "./Icons/Icons"
import { useContext, useState } from "react"
import { Context } from "../../contexts/Context"

export const RightMenuBar = () => {
    const [sideMenhOpenedOrClosed, setSideMenhOpenedOrClosed] = useState<string>('closed')

    const closerOrOpenMenu = () => {
        sideMenhOpenedOrClosed === 'closed' ? setSideMenhOpenedOrClosed('opened') : setSideMenhOpenedOrClosed('closed')
    }

    const {state, dispatch} = useContext(Context)

    return (
        <RightMenuBarStyled
        theme={state.theme.status}>
            <IconRightMenuBar
            ftcion={closerOrOpenMenu}/>
            <div className={`container ${sideMenhOpenedOrClosed}`}>
                <div className="Icons">
                    <a href="#"><TelegramIcon/></a>
                    <a href="#"><WhatsAppIcon/></a>
                    <a href="#"><LinkedInIcon/></a>
                    <a href="#"><GitHubIcon/></a>
                    <a href="#"><CvIcon/></a>
                    <a href="#"><InstagramIcon/></a>
                </div>
            </div>
        </RightMenuBarStyled>
    )
}