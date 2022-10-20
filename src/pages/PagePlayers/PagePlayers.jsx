import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Players from "../../components/Players/Players";
import FormPlayer from "../../components/FormPlayer/FormPlayer";
import FormEditPlayer from "../../components/FormEdit/FormEdit";

import { PlayersPage_styles, FloatButton_styles } from "./PagePlayersStyles";
import { BackgroundMask_styles, TitlePage_styles } from "../../styles/elements";

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
        <PlayersPage_styles>
            <BackgroundMask_styles filter={modalCreatePlayer || modalEditPlayer} />
            <TitlePage_styles bg={"players"}>YOUR <b>PLAYERS</b></TitlePage_styles>
        
            <Players currentListOfPlayers={statePlayers} onUpdateState={updateStates} />
           
            {modalCreatePlayer && <FormPlayer onUpdateState={updateStates} />}
            {modalEditPlayer && <FormEditPlayer onUpdateState={updateStates} />}

            <FloatButton_styles onClick={openModalCreatePlayer}>
                <span className="material-symbols-outlined">add</span>
            </FloatButton_styles>
        </PlayersPage_styles>
    )
}

export default PagePlayers;