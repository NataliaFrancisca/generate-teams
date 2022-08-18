import { useState, useEffect } from "react";

import { TitlePage } from "../../styles/elements";
import { TeamsStyled  } from "./style";

import Team from "../../components/Team";
import FormTeam from "../../components/FormTeam/FormTeam";

import { getPlayersLeftOver, getTeams } from "../../functions/registerTeams";

const Teams = () => {

    const [teams, setTeams] = useState();
    const [playersLeftOver, setPlayersLeftOver] = useState();

    const updateStates = () => {
        setTeams(getTeams());
        setPlayersLeftOver(getPlayersLeftOver());

        console.log("ACHO QUE O FORM MANDOU ATUALIZAR O STATE");
    }

    useEffect(() => {
        updateStates();
    },[])

    return(
        <TeamsStyled isVisible={playersLeftOver && playersLeftOver.length !== 0}>
            <TitlePage bg={'teams'}>YOUR <b>TEAMS</b></TitlePage>

            <FormTeam onUpdateStates={updateStates} />

            <section id="grid-teams">
                {teams && teams.map((team, index) => (
                    <Team numberTeam={index} key={team.id} data={team}/>
                ))}
            </section>

            <section id="grid-players-leftover">
                {playersLeftOver && playersLeftOver.map((player) => (
                    <h2>{player.name}</h2>
                ))}
            </section>
        </TeamsStyled>
    )
}

export default Teams;