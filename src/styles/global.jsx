import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --title: 'Signika', sans-serif;
        --text: 'Open Sans', sans-serif;
        --colorTeams: #d65b8b;
        --colorPlayers: #106c54;
        --colorBackground: #f5f8ff;
        --colorBlack: #142929;
    }

    *{
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }

    .App{
        background-color: #f5f8ff;
        display: flex;
        justify-content: center;
    }

    body, label, span, button, a, p, table, th, tr, td {
        font-family: var(--text);
    }
`