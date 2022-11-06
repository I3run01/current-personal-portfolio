import styled from "styled-components";

type Props = {
    theme: string
}

const titleDarkColor = '#ffff'
const titleLightColor = '#000000'

export const ExperiencesStyled = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

    h1, h2, h3 {
        font-family: 'Dosis', sans-serif;
        color: ${props => props.theme === 'dark' ? titleDarkColor : titleLightColor};
    }

    h1 {
        margin-left: 0;
        font-size: 48px;
    }

    h2 {
        font-size: 36px;
    }

    h3 {
        font-size: 24px;
    }

    p {
        line-height: 28px;
        font-size: 16px;
        font-family: 'Open Sans', sans-serif;
        color: ${props => props.theme === 'dark' ? titleDarkColor : titleLightColor};
    }

`