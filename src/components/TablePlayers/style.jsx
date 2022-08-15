import styled from "styled-components"

export const ContainerTable = styled.div`
    margin-top: 15px;
    border-radius: 3px;
    padding: 20px;

    background-color: var(--colorPlayers);

    table{
        width: 100%;
        border-collapse: collapse;
    }

    thead th{
        min-width: 100px;
        background-color: var(--colorBackground);
        letter-spacing: 2px;

        font-family: var(--title);
        font-size: 1.3em;
        font-weight: 600;

        @media screen and (max-width: 400px){
            min-width: auto;
        }
    }

    tr{
        border: solid var(--colorBlack) 2px;
    }

    tr:nth-child(even){
        background-color: rgba(250,250,250,.2);
    }

    td, th{
        padding: .5rem;
        text-align: left;
        border-left: solid var(--colorBlack) 2px;
        font-size: 1.2em;
    }
`