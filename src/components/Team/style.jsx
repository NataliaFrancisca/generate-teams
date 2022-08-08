import styled from "styled-components";

export const TeamStyled = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: auto;

    padding: 0 16px 16px 16px;
    margin: 10px 0;
    border-radius: 5px;

    background-color: var(--colorTeams);
    box-shadow: 0px 0px 4px rgba(240,240,240,.4);

    position: relative;
    border: solid black 2px;

    & h1{
        display: flex;
        justify-content: center;
        align-self: flex-end;

        background-color: #cfa01e;
        border-radius: 0 0 6px 6px;
        width: auto;
        padding: 0 10px;

        color: #F9F2ED;
        font-family: var(--title);
        text-align: center;
        font-size: 2.5em;
        word-break: break-all;
    }

    & .card-team-details{
        height: auto;
        display: flex;
        flex-direction: column;

        h2{
            background-color: #F9F2ED;
            padding: 8px 5px;
            margin-top: 10px;
            border-radius: 5px;
            color: #000000;
            border: solid black 2px;
            font-size: 1.2em;
        }

    }
`