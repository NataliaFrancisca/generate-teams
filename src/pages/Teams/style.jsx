import styled from "styled-components"

export const TeamsStyled = styled.section`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    padding: 10px;

    position: relative;

`
export const GridTeams = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
    gap: 10px;


    @media screen and (max-width: 400px){
        grid-template-columns: repeat(auto-fit, minmax(250px, auto));
    }
`

export const PlayersLeftOver = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
    gap: 10px;

    width: 100%;
    height: auto;

    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;

    background-color: #F94C66;
    box-shadow: 0px 0px 4px rgba(240,240,240,.4);

    border: solid black 2px;

    & h2{ 
        width: 100%;
        background-color: #FFFFFF;
        border-radius: 5px;
        border: solid black 2px;
        padding: 10px;
    }

    @media screen and (max-width: 400px){
        grid-template-columns: repeat(auto-fit, minmax(250px, auto));
    }
`