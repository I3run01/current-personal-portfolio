import styled from "styled-components";

type props = {
    theme: string
}

const darkColor = '#01001A'
const lightColor = '#E3E3E3'
const mobilePadding = '15px'

export const GlobalStyled = styled.div<props>`
    background-color: ${props => props.theme === 'dark' ? darkColor :  lightColor};
`
export const MainStyled = styled.div`
    padding-left: ${mobilePadding};
    padding-right: ${mobilePadding};

    //background-color: red;
    margin: auto;

    @media screen and (min-width: 700px) {
        margin: auto 20vw auto 20vw;
    }

    @media screen and (min-width: 1000px) {
        margin: auto 30vw auto 30vw;
    }
`