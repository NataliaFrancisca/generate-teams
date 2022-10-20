import { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";

import { Form_styles, GroupLabelInput_styles, Modal_styles} from "../../styles/elements";

import { checkDuplicate, editPlayer} from "../../functions/registerPlayer";
import { validateInputs, formatString } from "../../utils/handleForm";

const FormEditPlayer = ({onUpdateState}) => {

    const playerData = useSelector(state => state.reducerSavePlayerData);

    const [name, setName] = useState(playerData.name);
    const [level, setLevel] = useState(playerData.level);
    const [handleError, setHandleError] = useState({name: false, level: false});

    const dispatch = useDispatch();
    const closeModal = () => dispatch({type: "modal/edit/player"});

    const onHandleInputName = (event) => setName(event.target.value);
    const onHandleInputLevel = (event) => setLevel(+event.target.value);

    const onHandleSubmit = (event) => {
        event.preventDefault();

        const [validateName, validateLevel] = validateInputs(name, level);

        if(checkDuplicate({name, level})){
            alert("Hey, look like that someone have this register :)");
            return false;
        }
        
        if(validateName || validateLevel){
            alert("Hey, something wrong with the register :(");
            return false;
        }

        alert("Hey, your register was updated")
        editPlayer(playerData.id, {name: formatString(name), level});
        onUpdateState();
    }

    return(
        <Modal_styles>
            <header>
                <h1 id="title-modal">EDIT <b>PLAYER</b></h1>
                <button onClick={closeModal} id="button-close-modal">
                    <span class="material-symbols-outlined">close</span>
                </button>
            </header>

            <Form_styles onSubmit={onHandleSubmit}>
                <GroupLabelInput_styles>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={name}
                        minLength={2}
                        maxLength={20}
                        required
                        onChange={(event) => onHandleInputName(event)}
                    />
                    {handleError.name && <span>{handleError.name}</span>}
                </GroupLabelInput_styles>

                <GroupLabelInput_styles>
                    <label>Level:</label>
                    <input 
                        type="number" 
                        name="level" 
                        value={level}
                        minLength={1} 
                        maxLength={5} 
                        required
                        placeholder="between 1 and 5"
                        onChange={(event) => onHandleInputLevel(event)}
                    />
                    {handleError.level && <span>{handleError.level}</span>}
                </GroupLabelInput_styles>

                <button type="submit">Edit</button>
            </Form_styles>
    </Modal_styles>
    )
}

export default FormEditPlayer;