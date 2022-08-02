import { ButtonAction } from "../../styles/elements";

import { deletePlayer } from "../../functions/registerPlayer";
const Player = ({playerData}) => {

    const {name, level} = playerData;

    const onDeletePlayer = () => {
        deletePlayer(playerData.id)
        window.dispatchEvent(new Event("storage"));
    }

    return(
        <tr>
            <td>{name}</td>
            <td>{level}</td>
            <td>
                <ButtonAction color="#f5f8ff"><span class="material-symbols-outlined">edit</span></ButtonAction>
                <ButtonAction onClick={onDeletePlayer} color="#EB4747"><span class="material-symbols-outlined">delete</span></ButtonAction>
            </td>
        </tr>
    )
}

export default Player;