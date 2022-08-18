import styled from "styled-components"

export const ContainerListPlayers = styled.main`
    width: 100%;
    padding: 10px;

    display: grid;
    grid-template-columns: 60% 35%;
    justify-content: space-between;
    position: relative;

    & .groupButtons{
        position: absolute;
        top: 20px;
        right: 10px;
    }

    @media only screen and (max-width: 650px) {
        grid-template-columns: 100%;
        gap: 10px;
    }
`
