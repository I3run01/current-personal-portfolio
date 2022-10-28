import styled from "styled-components";

export const RigthMenuBarStyled = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #7199FF;
    height: 100vh;
    width: 300px;
    box-shadow: 1px 1px 1px black;

    a {
        font-family: 'Dosis', sans-serif;
        font-size: 32px;
        color: #ffff;
        padding-bottom: 60px;
        margin-left: 10px;
        :hover {
            color: #151433;
        }
    }
`