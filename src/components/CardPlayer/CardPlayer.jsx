import { useDispatch } from "react-redux";
import { CardPlayer_styles, ListCircle_styles, ButtonAction_styles } from "./CardPlayerStyles";
import { deletePlayer } from "../../functions/registerPlayer";

const CardPlayer = ({playerSelected, onUpdateStates}) => {

    const dispatch = useDispatch();

    const onDeletePlayer = () => {
        deletePlayer(playerSelected.id)
        onUpdateStates();
        alert("Your player was deleted! :(")
    }

    const onEditPlayer = () => {
        dispatch({type: "set/player/form", payload: playerSelected})
        dispatch({type: "modal/edit/player"});
        onUpdateStates();
    }

    return(
        <CardPlayer_styles>
            <h2>{playerSelected.name}</h2>

            <div className="groupLabel" id="level">
                <label>Level:</label>
                <ListCircle_styles totalCircles={playerSelected.level}>
                    <span className="circle">1</span>
                    <span className="circle">2</span>
                    <span className="circle">3</span>
                    <span className="circle">4</span>
                    <span className="circle">5</span>
                </ListCircle_styles> 
            </div>

            <div className="groupLabel">
                <label>T-shirt Number:</label>
                <p>{playerSelected.id}</p>
            </div>

            <div className="groupButtons">
                <ButtonAction_styles onClick={onEditPlayer} color="#f5f8ff"><span className="material-symbols-outlined">edit</span></ButtonAction_styles>
                <ButtonAction_styles onClick={onDeletePlayer} color="#EB4747"><span className="material-symbols-outlined">delete</span></ButtonAction_styles>
            </div>
        </CardPlayer_styles>
    )
}

export default CardPlayer;