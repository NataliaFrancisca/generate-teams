import styled from "styled-components";

export const PlayersPage_styles = styled.section`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    padding: 10px;

    position: relative;
`
export const FloatButton_styles = styled.button`
    position: fixed;
    bottom: 10px;
    right: 10px;

    width: 50px;
    height: 50px;
    border-radius: 50%;

    box-shadow: 0px 0px 2px rgba(20,20,20,.5);
    background-color: #C4DFAA;

    transition: filter .6s ease-in-out;

    cursor: pointer;

    &:hover{
        filter: brightness(80%);
    }
`
