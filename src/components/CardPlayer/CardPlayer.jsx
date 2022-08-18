import { useDispatch } from "react-redux";
import { ContainerCardPlayer, ListCircle, ButtonAction } from "./style";
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
        <ContainerCardPlayer>
            <h2>{playerSelected.name}</h2>

            <div className="groupLabel" id="level">
                <label>Level:</label>
                <ListCircle totalCircles={playerSelected.level}>
                    <span className="circle">1</span>
                    <span className="circle">2</span>
                    <span className="circle">3</span>
                    <span className="circle">4</span>
                    <span className="circle">5</span>
                </ListCircle> 
            </div>

            <div className="groupLabel">
                <label>T-shirt Number:</label>
                <p>{playerSelected.id}</p>
            </div>

            <div className="groupButtons">
                <ButtonAction onClick={onEditPlayer} color="#f5f8ff"><span className="material-symbols-outlined">edit</span></ButtonAction>
                <ButtonAction onClick={onDeletePlayer} color="#EB4747"><span className="material-symbols-outlined">delete</span></ButtonAction>
            </div>
        </ContainerCardPlayer>
    )
}

export default CardPlayer;