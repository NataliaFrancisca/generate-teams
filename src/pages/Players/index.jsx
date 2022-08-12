import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Player from "../../components/Player";
import FormPlayer from "../../components/FormPlayer";
import FormEditPlayer from "../../components/FormEdit";

import { FloatButton, BackgroundMask, TitlePage, ButtonHome } from "../../styles/elements";
import { PlayersStyled, ContainerTable } from "./style";

import { getPlayers } from "../../functions/registerPlayer";

const Players = () => {

    const [statePlayers, setStatePlayers] = useState();
    const [statePlayer, setStatePlayer] = useState();

    const navigate = useNavigate();
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
            <BackgroundMask filter={modalCreatePlayer || modalEditPlayer} />
            <TitlePage bg={"players"}>YOUR <b>PLAYERS</b></TitlePage>
           
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
                <span className="material-symbols-outlined">add</span>
            </FloatButton>

            <ButtonHome onClick={() => navigate("/")}>
                <span className="material-symbols-outlined">home</span>
            </ButtonHome>
        </PlayersStyled>
    )
}

export default Players;