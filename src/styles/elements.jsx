import styled from "styled-components";

export const BackgroundMask = styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
    z-index: 1;
    inset: ${props => props.filter ? "0px" : 'none'};
`

export const TitlePage = styled.h1`
     font-size: 1.8em;
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
        background-color: ${props => props.bg == "players" ? 'var(--colorPlayers)' : 'var(--colorTeams)'};
        top: 14px;
        display: block;
    }
`

// MODAL
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

    & header{
        display: flex;
        justify-content: space-between;
    }

    & #title-modal{
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
    }

    & #button-close-modal{
        background-color: transparent;
        font-size: 1.4em;
        cursor: pointer;

        &:hover{
            color: var(--colorPlayers)
        }
    }


    @media screen and (max-width: 800px) {
        width: 90%;
    }
`

// FORM STYLED
export const Form = styled.form`
    margin: 10px 0;

    & button[type=submit]{
        width: 100%;
        border-radius: 4px;

        margin-top: 15px;
        padding: 15px 10px;

        font-size: 1em;
        font-weight: 700;
        font-family: var(--title);
        letter-spacing: 2px;

        background-color: #C4DFAA;
        cursor: pointer;
        transition: filter .6s ease-in-out;

        &:hover{
            filter: brightness(80%);
        }
    }
`
export const GroupLabelInput = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 6px;

    & label {
        font-size: 1.2em;
        font-weight: 600;
        margin: 5px 0;
    }

    & input {
        padding: 10px 8px;
        font-size: 1.2em;
        border-radius: 3px;
        border: solid var(--colorBlack) 1.5px;
    }

    & span{
        font-weight: 600;
        color: #EB4747;
        letter-spacing: 1px;
    }
`

