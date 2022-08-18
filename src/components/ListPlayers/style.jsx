import styled from "styled-components";

export const ListOfPlayers = styled.div`
    border-radius: 3px;
    border: solid var(--colorBlack) 3px;
    padding: 20px;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, auto));
    gap: 10px;
    width: 100%;
`

export const Player = styled.div`
    width: 100%;
    background-color: var(--colorPlayers);
    padding: 10px;
    border-radius: 4px;
    font-size: 1.4em;

    color: var(--colorBackground);

    cursor: pointer;
    transition: all .2s ease;

    &:hover{
        filter: brightness(80%);
    }
`
