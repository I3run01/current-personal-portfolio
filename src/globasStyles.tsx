import styled from "styled-components";

type props = {
    theme: string
}

const darkColor = '#01001A'
const lightColor = '#E3E3E3'

//#01001A dark


export const GlobalStyled = styled.div<props>`
    
    background-color: ${props => props.theme === 'dark' ? darkColor :  lightColor};
    height: 100vh;
    width: 100vw;


`