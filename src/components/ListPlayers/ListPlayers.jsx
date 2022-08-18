import React from "react"
import { useDispatch } from "react-redux/es/exports"

import { ListOfPlayers, Player } from "./style"

const ListPlayers = React.memo(({players}) => {

    const dispatch = useDispatch();
    const setPlayer = (data) => dispatch({type: "set/player/form", payload: data});

    return(
        <ListOfPlayers>
            {players && players.map(player => (
                <Player key={player.id} playerData={player} onClick={() => setPlayer(player)}>
                    {player.name}
                </Player>
            ))}
        </ListOfPlayers>
    )
})

export default ListPlayers