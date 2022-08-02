import styled from "styled-components";

export const HomeStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 50%;

    @media screen and (min-width: 1800px){
        width: 40%;
    }

    @media screen and (max-width: 900px){
        width: 80%;
    }

    @media screen and (max-width: 600px){
        width: 90%;
    }
`

export const HomeTitle = styled.h1`
    font-size: 3em;
    font-family: var(--title);
    font-weight: 400;

    text-align: center;
    color: rgb(27, 38, 44);

    margin-bottom: 8px;
`

export const Button = styled.button`
    width: 100%;
    border-radius: 4px;

    margin: 6px 0;
    padding: 20px 10px;

    font-size: 1em;
    font-weight: 700;
    font-family: var(--title);
    letter-spacing: 2px;

    background-color: ${props => props.backgroundColor};

    cursor: pointer;
    transition: filter .6s ease-in-out;

    &:hover{
        filter: brightness(80%);
    }
`