import { CoverStyled } from "./styled"
import { Screen } from "./Screen"

export const Cover = () => {

    return (
        <CoverStyled
        id="CoverIndex">
            <Screen/>
            <div id="bkmain">
                <div id="bk01"></div>
                <div id="bk02"></div>
            </div>
        </CoverStyled>
    )
}