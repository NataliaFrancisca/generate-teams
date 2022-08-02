import styled from "styled-components";

export const Modal = styled.div`
    position: absolute;
    height: auto;
    width: 60%;

    border-radius: 3px;
    padding: 20px;
    background-color: var(--colorBackground);

    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;

    z-index: 11;

    header{
        display: flex;
        justify-content: space-between;
    }

    @media screen and (max-width: 800px) {
        width: 90%;
    }
`

export const ModalTitle = styled.h1`
    font-size: 1.4em;
    font-family: var(--title);
    font-weight: 400;

    text-align: center;
    color: rgb(27, 38, 44);

    margin-bottom: 8px;
    width: max-content;

    &:after{
        content: "";
        height: 3px;
        width: 80px;
        background-color: #C4DFAA;
        top: 14px;
        display: block;
    }
`
export const ModalButtonClose = styled.button`
    background-color: transparent;
    font-size: 1.4em;

    cursor: pointer;

    &:hover{
        color: var(--colorPlayers)
    }
`
