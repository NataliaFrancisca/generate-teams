import { useState, useEffect } from "react";

import { TitlePage } from "../../styles/elements";
import { TeamsStyled } from "./style";

import FormTeam from "../../components/FormTeam";

import { getPlayersLeftOver, getTeams } from "../../functions/registerTeams";
import Team from "../../components/Team";

const Teams = () => {

    const [teams, setTeams] = useState();
    const [playersLeftOver, setPlayersLeftOver] = useState([]);
  
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

            {teams && teams.map((team, index) => (
                <Team numberTeam={index} data={team}/>
            ))}
        </TeamsStyled>
    )
}

export default Teams;