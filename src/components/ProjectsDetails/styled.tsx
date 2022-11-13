import styled from "styled-components";

type Props = {
    theme: string
}

const titleDarkColor = '#ffff'
const titleLightColor = '#000000'

export const ProjectsDetailsStyles = styled.div<Props>`
    
    h1, h2 {
        font-family: 'Dosis', sans-serif;
        color: ${props => props.theme === 'dark' ? titleDarkColor : titleLightColor};
        margin-top: 0;
        padding-top: 100px;
    }

    h1 {
        font-size: 48px;
    }

    #container {
        #topDiv {
            display: flex;

            img {
                width: 70%;
                border: 4px solid ${props => props.theme === 'dark' ? titleDarkColor : titleLightColor};
                border-radius: 10px;
            }

            h2 {
                font-size: 24px;
                text-align: center;
            }
        }

        #bottomDiv {
            
        }
    }


`