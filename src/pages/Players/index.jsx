import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Player from "../../components/Player";
import FormPlayer from "../../components/FormPlayer";
import FormEditPlayer from "../../components/FormEdit";

import { FloatButton, BackgroundMask } from "../../styles/elements";
import { PlayersStyled, TitlePlayers, ContainerTable } from "./style";

import { getPlayers } from "../../functions/registerPlayer";

const Players = () => {

    const [statePlayers, setStatePlayers] = useState();
    const [statePlayer, setStatePlayer] = useState();

    const dispatch = useDispatch();

    const modalCreatePlayer = useSelector(state => state.reducerModalCreatePlayer);
    const modalEditPlayer = useSelector(state => state.reducerModalEditPlayer);

    const openModalCreatePlayer = () => dispatch({type: "modal/create/player"});
    const getPlayerState = (value) => setStatePlayer(value)

    window.addEventListener('storage', () => {
        setStatePlayers(getPlayers());
    })

    useEffect(() => {
        setStatePlayers(getPlayers());
    },[])

    return(
        <PlayersStyled>
            <BackgroundMask filter={modalCreatePlayer} />
            <TitlePlayers>YOUR <b>PLAYERS</b></TitlePlayers>
           
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
      
            {modalCreatePlayer && <FormPlayer />}
            {modalEditPlayer && <FormEditPlayer playerData={statePlayer} />}

            <FloatButton onClick={openModalCreatePlayer}>
                <span class="material-symbols-outlined">add</span>
            </FloatButton>
        </PlayersStyled>
    )
}

export default Players;