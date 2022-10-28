import { useState } from "react"
import { BurguerMenuStyled } from "./styled"

export const BurguerMenu = () => {
    const [openMenu, setOpenMenu] = useState<string>('menuClosed')
    const [mouseIn, setMouseIn] = useState<boolean>(false)

    const ChangeMenu = () => {
        if(openMenu == 'menuClosed') setOpenMenu('menuOpened')
        else setOpenMenu('menuClosed')
    }

    return (
        <BurguerMenuStyled 
            onClick={ChangeMenu}
            onMouseEnter={()=>{setMouseIn(true)}}
            onMouseLeave={()=> {setMouseIn(false)}}
            mouseIn={mouseIn}>
            <div className={`line01 line01${openMenu}`}/>
            <div className={`line02 line02${openMenu}`}/>
            <div className={`line03 line03${openMenu}`}/>
        </BurguerMenuStyled>
    )
}