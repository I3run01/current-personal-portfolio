import styled from "styled-components";

type Props = {
    theme: string
}

const titleDarkColor = '#ffff'
const titleLightColor = '#000000'

export const AboutStyled = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');

    min-height: 100vh;

    h1 {
        margin-left: 0;
        font-size: 48px;
        font-family: 'Dosis', sans-serif;
        color: ${props => props.theme === 'dark' ? titleDarkColor : titleLightColor};
    }

    img {
        border: 4px solid ${props => props.theme === 'dark' ? titleDarkColor : titleLightColor};
        width: 100%;
    }

    #text {
        width: 100%;
        color: ${props => props.theme === 'dark' ? titleDarkColor : titleLightColor};
        border: 4px solid ${props => props.theme === 'dark' ? titleDarkColor : titleLightColor};
        background-color: rgba(0, 57, 204, 20%);
        text-align: center;

        p {
            padding: 10px;
        }
    }

    @media screen and (min-width: 1000px) {
        img {
            width: 40vw;
        }

        #text {
            width: auto;
            margin-left: 20vw;
            margin-top: -40px;

            p {
                padding-top: 20px;
            }
        }


        
    }

`