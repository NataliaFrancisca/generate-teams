import React from "react";

import { useEffect, useState} from "react";
import { ContainerTable } from "./style";
import Player from "../Player";

const TablePlayers = React.memo(({getPlayers}) => {

    const [statePlayers, setStatePlayers] = useState();

    const getPlayerState = (value) => setStatePlayer(value)

    useEffect(() => {
        setStatePlayers(getPlayers)
    },[getPlayers])

    console.log("🤪 aqui estou na tabela dos jogadores")

    return(
        <ContainerTable>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Level</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {statePlayers && statePlayers.map(player => (
                        <Player key={player.id} playerData={player} onSendState={getPlayerState} />
                    ))}
                </tbody>  
            </table>
        </ContainerTable>
    )
})

export default TablePlayers;