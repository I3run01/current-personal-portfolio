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
        top: 10vh;
        left: 2.5vw;

        height: 85vh;
        width: 90vw;
        opacity: 0%;
        background-color: ${props => props.theme === 'dark' ? '#01001A' : '#E3E3E3'};

        z-index: -1;
        transition: all 0.5s ease-in-out;
        border: 2px solid ${props => props.theme === 'dark' ? titleDarkColor : titleLightColor};

        -webkit-box-shadow: 9px 10px 32px -13px rgba(0,0,0,0.75);
        -moz-box-shadow: 9px 10px 32px -13px rgba(0,0,0,0.75);
        box-shadow: 9px 10px 32px -13px rgba(0,0,0,0.75);

        overflow-y: scroll;

        h1, h2 {
            text-align: start;
            margin-left: 5vw;
        }

        h2 {
            text-align: start;
            padding-top: 10px;
        }

        #seeAllProject {
            display: flex;

            :hover {
                cursor: pointer;

                img {
                    filter: brightness(100%) invert(0)
                    saturate(${props => props.theme === 'dark' ? 50 : 20}) ;
                }

                h3 {
                    color: ${props => props.theme === 'dark' ? '#97B4FF' : '#0047FF'};
                }
            }

            h3 {
                font-family: 'Dosis', sans-serif;
                font-size: 16px;
                margin-left: 20px;
                color: ${props => props.theme === 'dark' ? titleDarkColor : titleLightColor};
            }

            img {
                margin-left: 5vw;
                width: 40px;
                filter: brightness(0) 
                invert(${props => props.theme === 'dark' ? 1 : 0});
            }
        }

        #imagesContainer {
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            align-items: center;
            justify-content: center;
            margin: auto;
            
            #images {
                margin-top: 5px;
                display: flex;
                flex-direction: column-reverse;
                justify-content: center;
                align-items: center;

                img {
                    border: 3px solid ${props => props.theme === 'dark' ? titleDarkColor : titleLightColor};
                    width: 90%;
                    transition: all 0.5s ease-in-out;  
                }

                #paragrath {

                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 10px;
                    transition: all 0.5s ease-in-out;

                    p {
                        font-size: 16px;
                        line-height: 24px;
                        font-family: 'Open Sans', sans-serif;
                        color: ${props => props.theme === 'dark' ? titleDarkColor : titleLightColor};
                        text-align: center;
                        overflow: hidden;
                        font-weight: bolder;
                    }
                    
                }
            }        
        } 
    }

    .gallaryShowed {
        opacity: 100%;
        z-index: 3;
    }

    .gallaryBK {
        position: fixed;
        bottom: -10px;
        left: -10px;

        height: 20px;
        width: 20px;

        border-radius: 50%;
        backdrop-filter: blur(7px);
        transition: all 0.5s ease-in-out;

        /* From https://css.glass */
        background: rgba(255, 255, 255, 0.2);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        z-index: 2;


    }

    .gallaryBKOn {
        scale: 100000%;
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

                #leftBottomDiv {
                    flex-direction: column;
                    justify-content: space-between;
                
                    .emptyDiv {
                        height: 40px;
                    }
                
                }
            }
        }

        .gallary {
            width: 90%;
            left: 2vw;

            h1, h2 {
                margin-left: 15px;
            }

            #seeAllProject {
                img {
                    margin-left: 15px;
                }
            }

            #imagesContainer {

                #images {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    width: 95%;
                    padding-right: 15px;

                    img {
                        width: 70%;
                    }

                    #paragrath {

                        p {
                            padding: 50px;
                        }
                    }

                }

            }
        }
    }


`