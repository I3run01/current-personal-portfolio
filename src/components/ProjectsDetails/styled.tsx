import styled from "styled-components";

type Props = {
    theme: string
}

const titleDarkColor = '#ffff'
const titleLightColor = '#000000'

export const ProjectsDetailsStyles = styled.div<Props>`
    min-height: 100vh;

    .backButton {
        position: fixed;
        top: 10px;
        left: 10px;
        z-index: 10;
        width: 40px;

        filter: brightness(0) invert(${props => props.theme === 'dark' ? 1 : 0});

        
        :hover {
            filter: brightness(100%) invert(0) 
            saturate(${props => props.theme === 'dark' ? 100 : 20});
        }
        

    }
    
    h1, h2 {
        font-family: 'Dosis', sans-serif;
        color: ${props => props.theme === 'dark' ? titleDarkColor : titleLightColor};
        margin-top: 0;
        padding-top: 100px;
        text-align: center;
    }

    h1 {
        font-size: 48px;
    }

    #container {
        #topDiv {
            margin-top: 100px;
            display: flex;
            flex-direction: column-reverse;

            img {
                width: 100%;
                border: 4px solid ${props => props.theme === 'dark' ? titleDarkColor : titleLightColor};
                border-radius: 10px;
                //box shadows
                -webkit-box-shadow: 9px 13px 20px -4px rgba(0,0,0,0.54);
                -moz-box-shadow: 9px 13px 20px -4px rgba(0,0,0,0.54);
                box-shadow: 9px 13px 20px -4px rgba(0,0,0,0.54);
                z-index: 1;
            }

            h2 {
                padding: 0;
                font-size: 24px;
                text-align: center;
                filter: drop-shadow(1px 1px 5px #000);
            }
        }

        #bottomDiv {
            display: flex;
            flex-direction: column-reverse;
            margin-top: 40px;

            #leftBottomDiv {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: flex-start;

                .emptyDiv {
                    height: 0px;
                }

                .Icons {
                    display: flex;
                    justify-content: space-between;
                    padding: 20px;
                    width: 150px;
                    
                    cursor: pointer;
                    
                    :hover img {
                        filter: brightness(100%) invert(0)
                        saturate(${props => props.theme === 'dark' ? 
                        50 : 20});
                    }

                    :hover h3 {
                        color: ${props => props.theme === 'dark' ? '#97B4FF' : '#0047FF'};
                    }

                    img {
                        width: 60px;

                        filter: brightness(0) invert(${props => props.theme === 'dark' ? 1 : 0});

                        

                    }

                    h3 {
                        font-family: 'Dosis', sans-serif;
                        color: ${props => props.theme === 'dark' ? titleDarkColor : titleLightColor};
                        font-size: 16px;
                    }
                    
                }
            }

            #rightBottomDiv {
                width: 100%;

                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                background-color: rgba(0, 71, 255, 0.2);

                border: 4px solid ${props => props.theme === 'dark' ? titleDarkColor : titleLightColor};
                border-radius: 10px;

                p {
                    line-height: 28px;
                    font-size: 16px;
                    font-family: 'Open Sans', sans-serif;
                    color: ${props => props.theme === 'dark' ? titleDarkColor : titleLightColor};
                    text-align: center;
                    width: 80%; 
                }
            }
        }
    }

    .gallary {
        position: fixed;
        top: 0px;
        left: 0vw;

        height: 100vh;
        width: 100vw;
        opacity: 0%;
        background-color: ${props => props.theme === 'dark' ? '#01001A' : '#E3E3E3'};

        z-index: -1;
        transition: all 0.5s ease-in-out;

        overflow-y: scroll;

        #imagesContainer {
            display: flex;
            flex-direction: column;
            margin: auto;

            img {
                margin-top: 20px;
                width: 90%;
            }
        } 
    }

    .gallaryShowed {
        opacity: 100%;
        z-index: 1;
    }

    @media screen and (min-width: 700px) {
        #container {
            #topDiv {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                h2 {
                    vertical-align: middle;
                }
                
                img {
                    width: 70%;
                }
            }

            #bottomDiv {
                display: flex;
                flex-direction: row;
                margin-top: -20px;

                #rightBottomDiv {
                    width: auto;
                }

                #leftBottomDiv {
                    flex-direction: column;
                    justify-content: space-between;
                
                    .emptyDiv {
                        height: 40px;
                    }
                
                }
            }

            



            
        }
    }


`