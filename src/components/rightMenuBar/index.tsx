import { useState } from "react"
import { RightMenuBarStyled } from "./styled"

export const RightMenuBar = () => {
    const [menuStatus, setMenuStatus] = useState<string>('closed')

    const handleMenuBTN = () => {
        menuStatus === 'closed' ? setMenuStatus('opened') : setMenuStatus('closed')
    }

    return (
        <RightMenuBarStyled
        onClick={handleMenuBTN}>
            <div className={`line01 line01${menuStatus}`}></div>
            <div className={`line02 line02${menuStatus}`}></div>
        </RightMenuBarStyled>
    )
}