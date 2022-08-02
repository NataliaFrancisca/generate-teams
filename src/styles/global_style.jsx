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

    body{
        background-color: #f5f8ff;
        font-family: var(--text);
    }
`