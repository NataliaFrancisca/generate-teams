import styled from "styled-components";

export const ContainerPage = styled.section`
    display: flex;
`

export const FloatButton = styled.button`
    position: fixed;
    bottom: 10px;
    right: 10px;

    width: 50px;
    height: 50px;
    border-radius: 50%;

    box-shadow: 0px 0px 2px rgba(20,20,20,.5);
    background-color: #C4DFAA;

    transition: filter .6s ease-in-out;

    cursor: pointer;

    &:hover{
        filter: brightness(80%);
    }
`

export const ButtonHome = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;

    width: 40px;
    height: 40px;

    background-color: transparent;

    transition: filter .6s ease-in-out;
    cursor: pointer;

    &:hover{
        color: #cfa01e;
    }
`

export const BackgroundMask = styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
    z-index: 1;
    inset: ${props => props.filter ? "0px" : 'none'};
`

export const TitlePage = styled.h1`
     font-size: 1.8em;
    font-family: var(--title);
    font-weight: 400;

    text-align: center;
    color: rgb(27, 38, 44);

    margin-bottom: 8px;
    width: max-content;

    &:after{
        content: "";
        height: 3px;
        width: 80px;
        background-color: ${props => props.bg == "players" ? 'var(--colorPlayers)' : 'var(--colorTeams)'};
        top: 14px;
        display: block;
    }
`
