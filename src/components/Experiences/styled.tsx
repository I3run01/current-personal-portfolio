import styled from "styled-components";

type Props = {
    theme: string
}

const titleDarkColor = '#ffff'
const titleLightColor = '#000000'

export const ExperiencesStyled = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');

    h1 {
        margin-left: 0;
        font-size: 48px;
        font-family: 'Dosis', sans-serif;
        color: ${props => props.theme === 'dark' ? titleDarkColor : titleLightColor};
    }

`