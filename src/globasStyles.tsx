import styled from "styled-components";

type props = {
    theme: string
}

const darkColor = '#01001A'
const lightColor = '#E3E3E3'
const mobilePadding = '15px'

export const GlobalStyled = styled.div<props>`
    background-color: ${props => props.theme === 'dark' ? darkColor :  lightColor};
    width: calc(100vw - 17px);
`
export const MainStyled = styled.div`
    padding-left: ${mobilePadding};
    padding-right: ${mobilePadding};

    max-width: 830px;
    margin: auto;
`