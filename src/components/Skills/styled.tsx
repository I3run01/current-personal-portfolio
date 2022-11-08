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
                position: relative;
                min-height: 100px;
                width: 200px;


                :hover {
                    cursor: pointer;
                    border: 1px solid ${props => props.theme === 'dark' ? '#ffffff' : '#000000'};
                    background-color: rgba(123, 122, 153, 0.4);
                }

                :hover img {
                    filter: brightness(100%) invert(0);
                }
                
                :hover h2 {
                    color: ${props => props.theme === 'dark' ? '#98B5FE' : 'rgba(0, 14, 51, 1)'};
                }

                :hover #paragraph {
                    display: block;
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

                #paragraph {
                    z-index: +1;
                    position: absolute;
                    display: none;
                    top: 0;
                    left: 70px;
                    width: calc(100vw - 150px);
                    height: 300px;
                    overflow-y: auto;
                    cursor: default;

                    /* From https://css.glass */
                    background: rgba(123, 122, 153, 0.4);
                    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                    backdrop-filter: blur(7.2px);
                    -webkit-backdrop-filter: blur(7.2px);
                    border: 3px solid rgba(0, 0, 0, 0.34);

                    padding: 10px;

                    p {
                        font-size: 16px;
                        font-family: 'Open Sans', sans-serif;
                        line-height: 28px;
                        color: ${props => props.theme === 'dark' ? titleDarkColor : titleLightColor};
                    }
                }
        }
    }
    
    @media screen and (min-width: 700px) {
        #container {
            #logos {
                #paragraph {
                    left: 70px;
                    min-width: 400px;
                    width: calc(100vw - 900px);
                }
            }
        }
    }

    @media screen and (min-width: 850px) {
        #container {
            #logos {
                #paragraph {
                    
                    left: 200px;
                    min-width: 400px;
                    width: calc(100vw - 900px);
                }
            }
        }
    }
`