import styled from "styled-components";

export const TopMenuBarStyled = styled.div`
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: row;
    justify-content: end;
    
    height: 80px;
    width: calc(100% - 70px);

    .themeBTN, .languageBTN {
        margin-right: 10px;
        transform: scale(50%);
        margin: 0;
        filter: brightness(0) invert(1);
        
        :hover {
            cursor: pointer;
            filter: brightness(80%) invert(0);
        }
    }
    
`