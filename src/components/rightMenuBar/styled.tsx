import styled from "styled-components";

export const RigthMenuBarStyled = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: #7199FF;
    height: 100vh;
    width: 300px;
    border: 1px solid #ffff;
    box-shadow: 1px 1px 1px black;

    ul {
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-family: 'Dosis', sans-serif;
        font-size: 32px;
        a {
            color: #ffff;
        }
    }
`