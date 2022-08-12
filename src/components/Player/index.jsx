import { useDispatch } from "react-redux/es/exports";

import { ButtonAction } from "../../styles/elements";

import { deletePlayer } from "../../functions/registerPlayer";

const Player = ({playerData, onSendState}) => {

    const {name, level} = playerData;
    const dispatch = useDispatch();

    const onDeletePlayer = () => {
        deletePlayer(playerData.id)
        window.dispatchEvent(new Event("storage"));
    }

    const onEditPlayer = () => {
        onSendState(playerData);
        dispatch({type: "modal/edit/player"});
    }

    return(
        <tr>
            <td>{name}</td>
            <td>{level}</td>
            <td>
                <ButtonAction onClick={onEditPlayer} color="#f5f8ff"><span className="material-symbols-outlined">edit</span></ButtonAction>
                <ButtonAction onClick={onDeletePlayer} color="#EB4747"><span className="material-symbols-outlined">delete</span></ButtonAction>
            </td>
        </tr>
    )
}

export default Player;