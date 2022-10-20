import styled from "styled-components"

export const TeamsPage_styles = styled.section`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    padding: 10px;

    position: relative;

    & #grid-teams{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, auto));
        gap: 10px;
        margin: 20px 0;

        @media screen and (max-width: 400px){
            grid-template-columns: repeat(auto-fit, minmax(250px, auto));
        }
    }

    & #grid-players-leftover{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, auto));
        gap: 10px;
        padding: ${props => props.isVisible ? '10px' : '0px'};
        background-color: #F94C66;
        border-radius: 5px;

        & h2{
            background-color: #F9F2ED;
            padding: 8px 5px;
            border-radius: 5px;
            color: #000000;
            border: solid black 2px;
            font-size: 1.2em;
        }

        @media screen and (max-width: 400px){
            grid-template-columns: repeat(auto-fit, minmax(250px, auto));
        }
    }
`