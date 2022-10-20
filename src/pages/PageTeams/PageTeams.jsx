import { useState, useEffect } from "react";

import { TitlePage_styles } from "../../styles/elements";
import { TeamsPage_styles  } from "./PageTeamsStyles";

import Team from "../../components/Team";
import FormTeam from "../../components/FormTeam/FormTeam";

import { getPlayersLeftOver, getTeams } from "../../functions/registerTeams";

const PageTeams = () => {

    const [teams, setTeams] = useState();
    const [playersLeftOver, setPlayersLeftOver] = useState();

    const updateStates = () => {
        setTeams(getTeams());
        setPlayersLeftOver(getPlayersLeftOver());
    }

    useEffect(() => {
        updateStates();
    },[])

    return(
        <TeamsPage_styles isVisible={playersLeftOver && playersLeftOver.length !== 0}>
            <TitlePage_styles bg={'teams'}>YOUR <b>TEAMS</b></TitlePage_styles>

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
        </TeamsPage_styles>
    )
}

export default PageTeams;