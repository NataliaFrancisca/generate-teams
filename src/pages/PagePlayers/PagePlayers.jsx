import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Players from "../../components/Players/Players";
import FormPlayer from "../../components/FormPlayer";
import FormEditPlayer from "../../components/FormEdit";

import { PlayersStyled, FloatButton } from "./style";
import { BackgroundMask, TitlePage } from "../../styles/elements";

import { getPlayers } from "../../functions/registerPlayer";

const PagePlayers = () => {

    const [statePlayers, setStatePlayers] = useState([]);

    const dispatch = useDispatch();

    const modalCreatePlayer = useSelector(state => state.reducerModalCreatePlayer);
    const modalEditPlayer = useSelector(state => state.reducerModalEditPlayer);

    const openModalCreatePlayer = () => dispatch({type: "modal/create/player"});
    const updateStates = () => setStatePlayers(getPlayers());

    useEffect(() => {
        setStatePlayers(getPlayers());
    },[])

    return(
        <PlayersStyled>
            <BackgroundMask filter={modalCreatePlayer || modalEditPlayer} />
            <TitlePage bg={"players"}>YOUR <b>PLAYERS</b></TitlePage>
        
            <Players currentListOfPlayers={statePlayers} onUpdateState={updateStates} />
           
            {modalCreatePlayer && <FormPlayer onUpdateState={updateStates} />}
            {modalEditPlayer && <FormEditPlayer onUpdateState={updateStates} />}

            <FloatButton onClick={openModalCreatePlayer}>
                <span className="material-symbols-outlined">add</span>
            </FloatButton>
        </PlayersStyled>
    )
}

export default PagePlayers;