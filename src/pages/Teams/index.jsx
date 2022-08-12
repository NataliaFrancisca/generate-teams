import { useState, useEffect } from "react";

import { TitlePage, ButtonHome } from "../../styles/elements";
import { TeamsStyled, GridTeams, PlayersLeftOver } from "./style";

import FormTeam from "../../components/FormTeam";

import { getPlayersLeftOver, getTeams } from "../../functions/registerTeams";
import Team from "../../components/Team";

import { useNavigate } from "react-router-dom";


const Teams = () => {

    const [teams, setTeams] = useState();
    const [playersLeftOver, setPlayersLeftOver] = useState();

    const navigate = useNavigate();

    const onUpdateTeams = () => {
        setTeams(getTeams())
    }

    const onUpdatePlayersLeftOver = () => {
        setPlayersLeftOver(getPlayersLeftOver());
    }

    useEffect(() => {
        setTeams(getTeams())
        setPlayersLeftOver(getPlayersLeftOver())
    },[])
  
    // useEffect(() => {
    //     updateStates();
    // },[])


    // window.addEventListener('storage', () => {
    //     console.log("autualiza ai")
    //     updateStates();
    // },[])

    // const updateStates = () => {
    //     console.log("TAMBÉM ESTOU SENDO ATUALIZADO")
    //     setTeams(getTeams());
    //     setPlayersLeftOver(getPlayersLeftOver())
    // }

    return(
        <TeamsStyled>
            <TitlePage bg={'teams'}>YOUR <b>TEAMS</b></TitlePage>
            <FormTeam onUpdateTeams={onUpdateTeams} onUpdatePlayersLeftOver={onUpdatePlayersLeftOver} />

            <GridTeams>
                {teams && teams.map((team, index) => (
                    <Team numberTeam={index}  key={team.id} data={team}/>
                ))}
            </GridTeams>
            
            {playersLeftOver ? <PlayersLeftOver>
                {playersLeftOver.map((player) => (
                    <h2>{player.name}</h2>
                ))}
            </PlayersLeftOver> : null}

            <ButtonHome onClick={() => navigate("/")}>
                <span className="material-symbols-outlined">home</span>
            </ButtonHome>
        </TeamsStyled>
    )
}

export default Teams;