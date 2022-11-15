import styled from "styled-components";

type props = {
    theme: string
}

export const TopMenuBarStyled = styled.div<props>`
    position: fixed;
    top: 0;
    z-index: +10;

    display: flex;
    flex-direction: row;
    justify-content: end;
    
    height: 80px;
    width: 100%;

    background: rgba(98, 99, 211, 0.14);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.5px);
    -webkit-backdrop-filter: blur(6.5px);
    border: 1px solid rgba(47, 49, 103, 0.32);
    

    .themeBTN, .languageBTN {
        padding: 0;
        transform: scale(50%);
        margin: 0;
        filter: brightness(0) invert(${props => props.theme === 'dark' ? 1 : 0});
        
        
        :hover {
            cursor: pointer;
            filter: brightness(100%) invert(0);
        }
    }

    #empty {
     width: 70px ;
    }

    @media screen and (min-width: 1000px) {
        background: none;
        box-shadow: none;
        backdrop-filter: blur(0px);
        -webkit-backdrop-filter: blur(0px);
        border: none;
    }
    
`