import { TopMenuBarStyled } from "./styled"

export const TopMenuBar = () => {

    return (
        <TopMenuBarStyled>
            <img src="TopMenuBar/BrazilLogo.svg" alt="" className="languageBTN" />
            <img src="TopMenuBar/Sun.svg" alt="" className="themeBTN" />
        </TopMenuBarStyled>
    )
}