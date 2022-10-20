import styled from "styled-components"

export const CardPlayer_styles = styled.div`
    width: 100%;
    height: max-content;
    padding: 10px;
    display: flex;
    flex-direction: column;

    background-color: var(--colorPlayers);
    border-radius: 3px;
    border: solid var(--colorBlack) 3px;

    position: relative;

    & h2{
        font-family: var(--title);
        font-size: 2em;
        text-transform: uppercase;
        letter-spacing: 4px;
        color:goldenrod;
        text-align: center;
        margin-bottom: 10px;
    }

    & .groupLabel{
        display: flex;
        font-size: 1.2em;
        color: var(--colorBackground);
        margin: 6px 0;

        & label{
            padding-right: 4px;
            font-weight: 600;
        }
    }

    & .groupButtons{
        position: absolute;
        top: 10px;
        right: 6px;
    }
`
export const ListCircle_styles = styled.div`
    display: flex;
    align-items: center;

    & .circle{
        width: 30px;
        height: 30px;

        border-radius: 50px;
        background-color: #f0efef;
        color: var(--colorBlack);
        margin: 0 5px;

        font-size: 1em;
        font-weight: 500;
        font-family: var(--title);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & .circle:nth-child(-n+${props => props.totalCircles}){
        background-color: #A0D995;
    }    
`

export const ButtonAction_styles = styled.button`
    background-color: transparent;
    margin-right: 6px;

    transition: filter .4s ease-in;
    color: ${props => props.color};

    cursor: pointer;
    
    &:hover{
        filter: brightness(80%);
    }
`