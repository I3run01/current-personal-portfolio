import styled from "styled-components";

type Props = {
    theme: string
}

const titleDarkColor = '#ffff'
const titleLightColor = '#000000'


export const ProjectsStyles = styled.div`
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

    h2 {
        font-size: 24px;
        z-index: +1;
        background-color: purple;
    }

    #projectsTypes {
        position: relative;

        width: 100%;
        overflow: hidden;
        border: 2px solid ${props => props.theme === 'dark' ? titleDarkColor : titleLightColor};

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
            opacity: 0;
        }

    }
    





`