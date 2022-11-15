import styled from "styled-components";

type Props = {
    theme: string
}

const titleDarkColor = '#ffff'
const titleLightColor = '#000000'


export const ProjectsStyles = styled.div<Props>`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

    padding-bottom: 100px;

    h1, h2 { 
        font-family: 'Dosis', sans-serif;
        color: ${props => props.theme === 'dark' ? titleDarkColor : titleLightColor}; 
    }

    h1 {
        font-size: 48px;
    }

    #projectsTypes {
        position: relative;

        width: 90%;
        margin: auto;
        overflow: hidden;
        transition: all 0.5s ease-in-out;

        :hover {
            cursor: pointer;
            filter:  saturate(10%) brightness(90%);
            backdrop-filter: blur(6px);
            width: 100%;
            z-index: +2;
        }

        :hover h2 {
            scale: 100%;
        }

        ::before {
            content: '';
            height: 0;
            float: left;
            padding-bottom: 32%;
        }

        img {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
            
        }

        h2 {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-80%);
            font-size: 24px;
            z-index: +1;
            scale: 0%;
            transition: all 0.5s ease-in-out;
            color: #ffffff;
        }
    }

    @media screen and (min-width: 700px) {
        #projectsTypes{
            width: 100%;

            :hover {
                width: 100%;
                scale: 110%;
            }

            ::before {
                padding-bottom: 27%;
            }
        }
    }
    





`