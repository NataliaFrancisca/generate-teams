import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import CardPlayer from "../CardPlayer/CardPlayer";
import { ContainerPlayers_styles, ListOfPLayers_styles } from "./PlayersStyles";

const Players = ({currentListOfPlayers, onUpdateState}) => {

    const dispatch = useDispatch();

    const [listOfPlayers, setListOfPlayers] = useState();

    const playerSelected = useSelector(state => state.reducerSavePlayerData);
    const setPlayer = data => dispatch({type: "set/player/form", payload: data});

    useEffect(() => {
        setListOfPlayers(currentListOfPlayers);
    },[currentListOfPlayers])

    const arrIsNotEmpty = (arr) => {
        return Array.isArray(arr) && arr.length > 0 ? true : false;
    }

    const objIsNotEmpty = (obj) => {
        return Object.keys(obj).length !== 0 && obj.constructor === Object;
    } 
   
    return(
        <ContainerPlayers_styles>

            {arrIsNotEmpty(listOfPlayers) &&
                <ListOfPLayers_styles>
                    {listOfPlayers.map(player => (
                        <div key={player.id} className="player-mini-card" onClick={() => setPlayer(player)}>
                            {player.name}
                        </div>
                    ))}
                </ListOfPLayers_styles>
            }   

            {objIsNotEmpty(playerSelected) &&
                <CardPlayer playerSelected={playerSelected} onUpdateStates={onUpdateState}/>
            }
            
        </ContainerPlayers_styles>
    )

}

export default Players;

