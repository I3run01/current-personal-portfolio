import styled from "styled-components";

export const RightMenuBarStyled = styled.div`
    .container {
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 0px;

        transition: all 0.5s ease-in-out;
        
        /* From https://css.glass */
        background: rgba(98, 99, 211, 0.14);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(6.5px);
        -webkit-backdrop-filter: blur(6.5px);

        .Icons {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 70px;
            height: 80%;

            a {
                margin: auto;
                transform: scale(80%);
            }

        }
    }

    //Animation
    .opened {
        width: 70px;
    }


`