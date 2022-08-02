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

export const ButtonAction = styled.button`
    background-color: transparent;
    margin-right: 10px;

    transition: filter .6s ease-in-out;

    cursor: pointer;

    color: ${props => props.color};

    &:hover{
        filter: brightness(80%);
    }
`


export const BackgroundMask = styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
    z-index: 1;
    inset: ${props => props.filter ? "0px" : 'none'};
`

