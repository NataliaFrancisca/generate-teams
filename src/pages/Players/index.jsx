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

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const modalCreatePlayer = useSelector(state => state.reducerModalCreatePlayer);
    const modalEditPlayer = useSelector(state => state.reducerModalEditPlayer);

    const openModalCreatePlayer = () => dispatch({type: "modal/create/player"});

    const updateStates = () => {
        console.log("os forms mandou você atualizar o state....")
        setStatePlayers(getPlayers())
    }

    useEffect(() => {
        setStatePlayers(getPlayers());
    },[])

    const listOfPlayers = useCallback(() => {
        return statePlayers;
    },[statePlayers]);

    return(
        <PlayersStyled>
            <BackgroundMask filter={modalCreatePlayer || modalEditPlayer} />
            <TitlePage bg={"players"}>YOUR <b>PLAYERS</b></TitlePage>
        
            <TablePlayers getPlayers={listOfPlayers} />
      
            {modalCreatePlayer && <FormPlayer onUpdateState={updateStates} />}
            {modalEditPlayer && <FormEditPlayer onUpdateState={updateStates} />}

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