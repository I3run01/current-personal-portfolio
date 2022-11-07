import styled from "styled-components";

type props = {
    theme: string
}

export const TopMenuBarStyled = styled.div<props>`
    position: fixed;
    top: 0;
    z-index: +2;

    display: flex;
    flex-direction: row;
    justify-content: end;
    
    height: 80px;
    width: calc(100% - 70px);

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
    
`