import { useState, useEffect } from "react";

import { TitlePage, ButtonHome } from "../../styles/elements";
import { TeamsStyled, GridTeams } from "./style";

import FormTeam from "../../components/FormTeam";

import { getPlayersLeftOver, getTeams } from "../../functions/registerTeams";
import Team from "../../components/Team";

import { useNavigate } from "react-router-dom";

const Teams = () => {

    const [teams, setTeams] = useState();
    const [playersLeftOver, setPlayersLeftOver] = useState([]);

    const navigate = useNavigate();
  
    useEffect(() => {
        updateStates();
    },[])

    window.addEventListener('storage', () => {
        updateStates();
    })

    const updateStates = () => {
        setTeams(getTeams());
        setPlayersLeftOver(getPlayersLeftOver())
    }

    return(
        <TeamsStyled>
            <TitlePage bg={'teams'}>YOUR <b>TEAMS</b></TitlePage>
            <FormTeam />

            <GridTeams>
                {teams && teams.map((team, index) => (
                    <Team numberTeam={index} data={team}/>
                ))}
            </GridTeams>
            
            <ButtonHome onClick={() => navigate("/")}>
                <span class="material-symbols-outlined">home</span>
            </ButtonHome>
        </TeamsStyled>
    )
}

export default Teams;