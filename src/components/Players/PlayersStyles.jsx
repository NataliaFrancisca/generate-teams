import styled from "styled-components"

export const ContainerPlayers_styles = styled.main`
    width: 100%;
    padding: 10px;

    display: grid;
    grid-template-columns: 60% 35%;
    justify-content: space-between;

    @media only screen and (max-width: 650px) {
        grid-template-columns: 100%;
        gap: 10px;
    }
`
export const ListOfPLayers_styles = styled.div`
    border-radius: 3px;
    border: solid var(--colorBlack) 3px;
    padding: 20px;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, auto));
    gap: 10px;
    width: 100%;

    & .player-mini-card{
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
    }
`
