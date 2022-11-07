import styled from "styled-components";

type Props = {
    theme: string
}

const darkColor = '#ffff'
const lightColor = '#000000'

export const ScreenStyle = styled.div<Props>`
    display: flex;
    position: relative;
    z-index: 1;

    width: 385px;
    border: 7px solid ${props => props.theme === 'dark' ? darkColor : lightColor};
    border-radius: 40px;
    overflow: hidden;
    -webkit-overflow-scrolling: auto;
    box-shadow: 1px 1px 1px black;
    background-color: ${props => props.theme === 'dark' ? '#00000017' : '#ffffff25f'};

    img {
        margin-top: -3px;
        transform: translateX(-50%);
        position: absolute;
        height: 105%;
        left: 50%;
    }

    ::before {
        content: '';
        height: 0;
        float: left;
        padding-bottom: 46%;
    }

    #bkLeft, #bkRight {
        margin-top: -10px;
        margin-left: -10px;
        margin-right: -10px;
        padding: 0;
        z-index: 0;
        height: 110%;
        width: 55%;
    }

    #bkLeft {
        background: rgb(0,255,139);
        background: linear-gradient(215deg, rgba(0,255,139,0.6) 0%, rgba(145,8,178,0.6) 100%);
        opacity: 80%;
    }

    #bkRight {
        background: rgb(0,71,255);
        background: linear-gradient(135deg, rgba(0,71,255,0.6) 0%, rgba(217,140,20,6) 100%);
        opacity: 80%;
    }
    
`