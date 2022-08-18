import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { Modal } from "../../styles/modal";
import { Form, GroupLabelInput } from "../../styles/form";

import { setPlayer, createID, checkDuplicate } from "../../functions/registerPlayer";
import { validateInputs, formatString } from "../../utils/handleForm";

const FormPlayer = ({onUpdateState}) => {

    const dispatch = useDispatch();
    const closeModal = () => dispatch({type: "modal/create/player"});

    const inputNameRef = useRef();

    const [name, setName] = useState("");
    const [level, setLevel] = useState();
    const [handleError, setHandleError] = useState({name: false, level: false})

    const onHandleInputName = (event) => setName(event.target.value);
    const onHandleInputLevel = (event) => setLevel(+event.target.value);

    const onHandleSubmit = (event) => {
        event.preventDefault();

        const [validateName, validateLevel] = validateInputs(name, level);

        const playerObj = {
            id: createID(),
            name: formatString(name),
            level: level
        }

        if(checkDuplicate(playerObj)){
            alert("Hey, look like that you already have a register :)");
            return false;
        }
        
        if(validateName || validateLevel){
            alert("Hey, something wrong with the register :(");
            setHandleError({name: validateName, level: validateLevel})
            return false;
        }

        alert("Hey, everthing okay with the register :)")
        setPlayer(playerObj);
        onUpdateState();

        setName("");
        setLevel(0);
        inputNameRef.current.focus();
    }

    return(
        <Modal>
            <header>
                <h1 id="title-modal">ADD <b>PLAYER</b></h1>
                <button onClick={closeModal} id="button-close-modal">
                    <span class="material-symbols-outlined">close</span>
                </button>
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
                        ref={inputNameRef}
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
                        placeholder="between 1 and 5"
                        onChange={(event) => onHandleInputLevel(event)}
                    />
                    {handleError.level && <span>{handleError.level}</span>}
                </GroupLabelInput>

                <button type="submit">Register</button>
            </Form>
        </Modal>
    )
}

export default FormPlayer;