import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import FormPlayer from "../../components/FormPlayer";
import FormEditPlayer from "../../components/FormEdit";

import { FloatButton, BackgroundMask, TitlePage, ButtonHome } from "../../styles/elements";
import { PlayersStyled } from "./style";

import { getPlayers } from "../../functions/registerPlayer";
import { useCallback } from "react";
import TablePlayers from "../../components/TablePlayers";

const Players = () => {

    const [statePlayers, setStatePlayers] = useState([]);
    const [statePlayer, setStatePlayer] = useState();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const modalCreatePlayer = useSelector(state => state.reducerModalCreatePlayer);
    const modalEditPlayer = useSelector(state => state.reducerModalEditPlayer);

    const openModalCreatePlayer = () => dispatch({type: "modal/create/player"});
    const getPlayerState = (value) => setStatePlayer(value)

    window.addEventListener('storage', () => {
        console.log('se liga, precisa atualizar o state')
        setStatePlayers(getPlayers());
    })

    useEffect(() => {
        setStatePlayers(getPlayers());
    },[])

    const listOfPlayers = useCallback(() => {
        console.log("🎉 aqui vai atualizar o callback....")
        return statePlayers;
    },[statePlayers]);

    console.log("😭 estou na página players")

    return(
        <PlayersStyled>
            <BackgroundMask filter={modalCreatePlayer || modalEditPlayer} />
            <TitlePage bg={"players"}>YOUR <b>PLAYERS</b></TitlePage>
        
            <TablePlayers getPlayers={listOfPlayers} />
      
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