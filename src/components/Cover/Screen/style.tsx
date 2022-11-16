import styled from "styled-components";

type Props = {
    theme: string
}

const darkColor = '#ffff'
const lightColor = '#000000'

export const ScreenStyle = styled.div<Props>`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');


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
        left: 60%;
        z-index: 2;
    }

    #subtitle, #title {
        position: absolute;
        font-family: 'Dosis', sans-serif;
        z-index: 1;
        color: #ffffff;
        filter: drop-shadow(1px 1px 4px #000000);

        span {
            color: #001D66;
        }
    }

    #subtitle {
        top: 20%;
        left: 3%;
        font-size: 16px;
    }

    #title {
        top: 30%;
        left: 3%;
        font-size: 24px;
        
        #letterT {
            margin-right: -10px;
        }
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

    @media screen and (min-width: 500px) {
        #subtitle {
            top: 20%;
            left: 3%;
            font-size: 20px;
        }

        #title {
            top: 30%;
            left: 3%;
            font-size: 32px;
        }
    }

    @media screen and (min-width: 700px) {
        #subtitle {
            top: 20%;
            left: 3%;
            font-size: 24px;
        }

        #title {
            top: 25%;
            left: 3%;
            font-size: 48px;
        }
    }
    
`