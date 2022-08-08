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