import styled from "styled-components";

export const CoverStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;

    margin-left: 15px;
    margin-right: 15px;

    img {
        
        width: 100%;
    }

    @media screen and (min-width: 1000px) {
        img {
            max-width: 800px;
        }
    }

    @media screen and (min-width: 1300px) {
        img {
            width: 1100px;
        }
    }

`