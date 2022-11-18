import { useContext } from "react"
import { Context } from "../../contexts/Context"
import {StyledFooter} from './styled'

export const Footer = () => {

    const {state, dispatch} = useContext(Context)

    return (
        <StyledFooter>
            <p>
                {state.language.status === 'english' ? 'All rights reserved' : 'Todos os direitos reservados'}
            </p>
        </StyledFooter>
    )
}