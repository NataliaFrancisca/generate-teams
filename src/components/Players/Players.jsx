import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CardPlayer from "../CardPlayer/CardPlayer";
import ListPlayers from "../ListPlayers/ListPlayers";

import { ContainerListPlayers } from "./style";

const Players = ({listOfPlayers, onUpdateState}) => {

    const [statePlayers, setStatePlayers] = useState();
    const playerSelected = useSelector(state => state.reducerSavePlayerData);

    useEffect(() => {
        setStatePlayers(listOfPlayers);
    },[listOfPlayers])

    const isNotEmpty = (arr) => Array.isArray(arr) && arr.length == 0 ? false : true;

    return(
        <ContainerListPlayers>
            <ListPlayers players={statePlayers} />
            {isNotEmpty(playerSelected) && <CardPlayer playerSelected={playerSelected} onUpdateStates={onUpdateState}/>}
        </ContainerListPlayers>
    )
}

export default Players;

