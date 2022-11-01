import styled from "styled-components";

type props = {
    onHover:boolean
}

export const IconRightMenuBarStyled = styled.div<props>`
    position: fixed;
    right: 21px;
    bottom: 12px;
    height: 50px;
    width: 50px;
    z-index: +4;
    cursor: pointer;

    .line01, .line02 {
        position: fixed;
        right: 25px;
        bottom: 35px;

        width: 40px;
        height: 3px;
        background-color: ${props => props.onHover ? '#001D66' : '#ffff'};
        transition: all 0.5s ease-in-out;

        border: 1px solid #ffff;
        border-radius: 10px;
        
    }

    .line02 {
        transform: rotate(90deg);
    }

    //animation
    .line01opened {
        width: 50px;
        transform: translateX(5px);
    }

    .line02opened {
        rotate: 90deg;
        opacity: 0;
    }

    
`