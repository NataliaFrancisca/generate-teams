import { useState, useLayoutEffect, useEffect } from "react";

import { TitlePage, ButtonHome } from "../../styles/elements";
import { TeamsStyled, GridTeams, PlayersLeftOver } from "./style";

import Team from "../../components/Team";
import FormTeam from "../../components/FormTeam";

import { getPlayersLeftOver, getTeams } from "../../functions/registerTeams";
import { useNavigate } from "react-router-dom";

const Teams = () => {

    const [teams, setTeams] = useState();
    const [playersLeftOver, setPlayersLeftOver] = useState();

    const navigate = useNavigate();

    const updateStates = () => {
        setTeams(getTeams());
        setPlayersLeftOver(getPlayersLeftOver());

        console.log("ACHO QUE O FORM MANDOU ATUALIZAR O STATE");
    }

    useLayoutEffect(() => {
        updateStates();
    },[])

    useEffect(() => {
        console.log("FUI ATUALIZADO :)")
        console.log(teams)
    },[teams])

    return(
        <TeamsStyled>
            <TitlePage bg={'teams'}>YOUR <b>TEAMS</b></TitlePage>
            <FormTeam onUpdateStates={updateStates}  />

            <GridTeams>
                {teams && teams.map((team, index) => (
                    <Team numberTeam={index} key={team.id} data={team}/>
                ))}
            </GridTeams>
            
            {playersLeftOver && 
                playersLeftOver.length > 0 && 
                    <PlayersLeftOver>
                        {playersLeftOver.map((player) => (
                            <h2>{player.name}</h2>
                        ))}
                    </PlayersLeftOver>
            } 

            <ButtonHome onClick={() => navigate("/")}>
                <span className="material-symbols-outlined">home</span>
            </ButtonHome>
        </TeamsStyled>
    )
}

export default Teams;