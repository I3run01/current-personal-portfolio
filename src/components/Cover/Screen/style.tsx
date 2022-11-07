import styled from "styled-components";

type Props = {
    theme: string
}

const darkColor = '#ffff'
const lightColor = '#000000'

export const ScreenStyle = styled.div<Props>`
    display: flex;
    z-index: 1;

    width: 385px;
    background-color: red;
    border: 10px solid ${props => props.theme === 'dark' ? darkColor : lightColor};
    border-radius: 40px;

    ::before {
        content: '';
        height: 0;
        float: left;
        padding-bottom: 46%;
    }

    #bkLeft, #bkRight {
        z-index: 0;
        height: 100%;
        width: 50%;
    }

    #bkLeft {
        background-color: green;
    }

    #bkRight {
        background-color: yellow;
    }
    
`