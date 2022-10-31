import styled from "styled-components";

export const RightMenuBarStyled = styled.div`
    position: fixed;
    right: 21px;
    bottom: 12px;
    height: 50px;
    width: 50px;
    cursor: pointer;



    .line01, .line02 {
        position: fixed;
        right: 25px;
        bottom: 35px;

        width: 40px;
        height: 4px;
        background-color: #ffffff;
        transition: all 0.5s ease-in-out;
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