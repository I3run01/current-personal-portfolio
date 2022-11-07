import styled from "styled-components";

type Props = {
    theme: string
}

const darkColor = '#ffff'
const lightColor = '#000000'

export const ScreenStyle = styled.div<Props>`
    width: 1087px;
    height: 501px;
    background-color: red;
    border: 10px solid ${props => props.theme === 'dark' ? darkColor : lightColor};
    
`