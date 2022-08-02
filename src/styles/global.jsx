import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --title: 'Signika', sans-serif;
        --text: 'Open Sans', sans-serif;
        --colorTeams: #B1E1FF;
        --colorPlayers: #AFB4FF;
        --colorBackground: #f5f8ff;
        --colorBlack: rgb(27, 38, 44);
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