import styled from "styled-components";

type Props = {
    theme: string
}

const titleDarkColor = '#ffff'
const titleLightColor = '#000000'

export const SkillsStyled = styled.div`
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
        display: flex;

        #leftDiv {

            #logos {
                display: flex;
                min-height: 100px;
                
                :hover {
                    cursor: pointer;
                }
                
                img {
                    width: 40px;
                    margin: 15px;


                }

                h2 {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }

        #rightDiv {
            background-color: red;
            padding: 20px;
        }
    }
    
`