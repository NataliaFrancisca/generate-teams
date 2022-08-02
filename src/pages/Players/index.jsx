import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Player from "../../components/Player";
import FormPlayer from "../../components/FormPlayer";

import { FloatButton, BackgroundMask} from "../../styles/elements";
import { PlayersStyled, TitlePlayers, ContainerTable } from "./style";

import { getPlayers } from "../../functions/registerPlayer";

const Players = () => {

    const [statePlayers, setStatePlayers] = useState();
    const dispatch = useDispatch();

    const modalState = useSelector(state => state.reducerModalPlayers);
    const openModal = () => dispatch({type: "modal/players"});

    window.addEventListener('storage', () => {
        setStatePlayers(getPlayers());
    })

    useEffect(() => {
        setStatePlayers(getPlayers());
    },[])
  
    return(
        <PlayersStyled>
            <BackgroundMask filter={modalState} />
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
                            <Player key={player.id} playerData={player} />
                        ))}
                    </tbody>  
                </table>
            </ContainerTable>

            {modalState && <FormPlayer />}

            <FloatButton onClick={openModal}>
                <span class="material-symbols-outlined">add</span>
            </FloatButton>
        </PlayersStyled>
    )
}

export default Players;