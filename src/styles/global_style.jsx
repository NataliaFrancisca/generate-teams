import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --title: 'Signika', sans-serif;
        --text: 'Open Sans', sans-serif;
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

    body, label, span, button, a, p {
        font-family: var(--text);
    }
`