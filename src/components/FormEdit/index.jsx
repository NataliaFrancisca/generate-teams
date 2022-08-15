import { useDispatch, useSelector } from "react-redux/es/exports";

import { Modal, ModalTitle, ModalButtonClose } from "../../styles/modal";
import { Form, GroupLabelInput, FormButton } from "../../styles/form"
import { useState, useEffect } from "react";

import { checkDuplicate, editPlayer} from "../../functions/registerPlayer";

const FormEditPlayer = ({onUpdateState}) => {

    const playerData = useSelector(state => state.reducerSavePlayerData);

    console.log("OLHA O PLAYERDATA", playerData)

    const [name, setName] = useState(playerData.name);
    const [level, setLevel] = useState(playerData.level);
    const [handleError, setHandleError] = useState({name: false, level: false});

    const dispatch = useDispatch();

    const onHandleInputName = (event) => setName(event.target.value);
    const onHandleInputLevel = (event) => setLevel(+event.target.value);

    const validateInputName = () => {
        const error = name.length < 2 ? "Name must have 2 or more characters." : false;
        setHandleError({...handleError, name: error})
    }

    const validateInputLevel = () => {
        const error = level < 1 || level > 5 ? "Level must be between 1 and 5." : false;
        setHandleError({...handleError, level: error})
    }

    const onHandleSubmit = (event) => {
        event.preventDefault();

        if(checkDuplicate({name, level})){
            alert("Hey, look like that someone have this register :)");
            return false;
        }
        
        if(handleError.name || handleError.level){
            alert("Hey, something wrong with the register :(");
            return false;
        }

        alert("Hey, your register was updated")
        editPlayer(playerData.id, {name, level});
        onUpdateState();
    }

    const onCloseModal = () => dispatch({type: "modal/edit/player"});

    useEffect(() => {
        validateInputName();
    },[name])

    useEffect(() => {
        validateInputLevel();
    },[level])

    return(
        <Modal>
        <header>
            <ModalTitle>EDIT <b>PLAYER</b></ModalTitle>
            <ModalButtonClose onClick={onCloseModal}>
                <span class="material-symbols-outlined">close</span>
            </ModalButtonClose>
        </header>

        <Form onSubmit={onHandleSubmit}>
            <GroupLabelInput>
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
            </GroupLabelInput>

            <GroupLabelInput>
                <label>Level:</label>
                <input 
                    type="number" 
                    name="level" 
                    value={level}
                    minLength={1} 
                    maxLength={5} 
                    required
                    onChange={(event) => onHandleInputLevel(event)}
                />
                {handleError.level && <span>{handleError.level}</span>}
            </GroupLabelInput>

            <FormButton type="submit">Edit</FormButton>
        </Form>
    </Modal>
    )
}

export default FormEditPlayer;