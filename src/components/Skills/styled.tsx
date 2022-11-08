import styled from "styled-components";

type Props = {
    theme: string
}

const titleDarkColor = '#ffff'
const titleLightColor = '#000000'

export const SkillsStyled = styled.div<Props>`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

    margin-top: 100px;

    h1, h2 {
        font-family: 'Dosis', sans-serif;
        color: ${props => props.theme === 'dark' ? titleDarkColor : titleLightColor};
        
    }

    h1 {
        font-size: 48px;
    }

    h2 {
        font-size: 24px;
    }

    #container {
            #logos {
                display: flex;
                min-height: 100px;
                width: 300px;

                :hover {
                    cursor: pointer;
                    border: 1px solid white;
                    background-color: rgba(123, 122, 153, 0.4)
                }

                :hover img {
                    filter: brightness(100%) invert(0);
                }

                :hover h2 {
                    color: ${props => props.theme === 'dark' ? '#98B5FE' : 'rgba(0, 14, 51, 1)'};
                }
                
                img {
                    width: 40px;
                    margin: 15px;
                    filter: brightness(0) invert(${props => props.theme === 'dark' ? 1 : 0});
                }

                h2 {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                } 
        }
    }
    
`